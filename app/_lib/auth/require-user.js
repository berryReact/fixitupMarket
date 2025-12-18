import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/app/_lib/supabase/server";



export async function requireAdmin(redirectTo = "/login") {

	const supabase = createSupabaseServerClient();

	const { data: { user }, } = await supabase.auth.getUser();

	if (!user) redirect(redirectTo);

	const { data: profile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();

	if (!profile || (profile.role !== "admin" && profile.role !== "supervisor")) {

		redirect(redirectTo);
	}

	return { supabase, user, profile };
}




export async function getOptionalUser() {

	const supabase = createSupabaseServerClient();

	const { data: { user } } = await supabase.auth.getUser();

	if (!user) return { user: null, profile: null }

	const { data: profile, error } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", user.id)
		.single();

	if (error) {
		throw new Error('Profile Not Found!')
	}

	return { supabase, user, profile }; // user will be null if not logged in
}




export async function requireUser(redirectTo = "/login") {

	const supabase = createSupabaseServerClient();

	const { data: { user } } = await supabase.auth.getUser();

	if (!user) redirect(redirectTo);

	const { data: profile, error } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", user.id)
		.single();

	if (error) {
		throw new Error('Profile Not Found!')
	}
	return { supabase, user, profile };
}

