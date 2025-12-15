import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createSupabaseServerClient() {

	const cookieStore = cookies();

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet) {
					try {
						cookiesToSet.forEach(({ name, value, options }) => {
							cookieStore.set(name, value, options);
						});
					} catch {
						// This happens when called from a Server Component render.
						// It's fine to ignore here — cookies will be set in middleware or Server Actions.
					}
				},
			},
		}
	);
}
