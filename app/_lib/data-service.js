import { createSupabaseServerClient } from '@/app/_lib/supabase/server'
import { requireUser, requireAdmin } from "@/app/_lib/auth/require-user";
import { notFound, redirect } from 'next/navigation';



///-------------	Private Data-Services		-------------///

export async function getMyListings({ limit } = {}) {

	const { supabase, user } = await requireUser("/login");

	let query = supabase
		.from("listings")
		.select("*")
		.eq("sellerId", user.id)
		.order("createdAt", { ascending: false });

	if (limit) query = query.limit(limit);

	const { data, error } = await query;

	if (error) {
		console.error(error);
		throw new Error("Your listings could not be loaded");
	}
	return data;
}



export async function getMyProfile() {

	const { supabase, user } = await requireUser("/login");

	const { data, error } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", user.id)
		.single()

	if (error || !data) {
		console.error(error);
		throw new Error("Your Profile could not be loaded");
	}
	return data;

}



export async function getAllProfiles() {

	const { supabase } = await requireUser("/login");

	const { data, error } = await supabase
		.from("profiles")
		.select("*")


	if (error || !data) {
		console.error(error);
		throw new Error("Your Profile could not be loaded");
	}

	return data;
}


export async function getProfile(id) {

	const { supabase } = await requireUser("/login");

	const { data, error } = await supabase
		.from("profiles")
		.select('*')
		.eq('id', id)
		.single();

	if (error || !data) {
		console.error(error);
		throw new Error("Your Profile could not be loaded");
	}

	return data;
}



export async function getEnquiries() {

	const { supabase } = await requireAdmin("/login");

	const { data, error } = await supabase
		.from('enquiries')
		.select('*')
		.order('created_at', { ascending: false })


	if (error) {
		console.error(error);
		throw new Error('Enquiries could not be loaded');
	}
	return data;
};


export async function getEnquiry(id) {

	const { supabase } = await requireAdmin("/login");

	const { data, error } = await supabase
		.from('enquiries')
		.select('*')
		.eq('id', id)
		.single()


	if (error) {
		console.error(error);
		throw new Error('Enquiries could not be loaded');
	}
	return data;


};




//----------- 	Public Data-Services	-------------///


/// get latest items

export async function getLatestItems({ limit } = {}) {

	const supabase = createSupabaseServerClient();


	let query = supabase
		.from('listings')
		.select('id, title,category , startPrice, location ,createdAt,coverImage')
		.order('createdAt', { ascending: false })

	if (limit) query = query.limit(limit);

	const { data, error } = await query;


	if (error) {
		console.error(error);
		throw new Error('Latest Items could not be loaded');
	}
	return data;
};


///	get all listings


export async function getAllItems() {

	const supabase = createSupabaseServerClient();

	const { data, error } = await supabase
		.from('listings')
		.select('*')
		.order('createdAt', { ascending: false })


	if (error) {
		console.error(error);
		throw new Error('Items could not be loaded');
	}
	return data;
};




/// Get a listing by ID


export async function getListing(id) {

	const supabase = createSupabaseServerClient();

	const { data, error } = await supabase
		.from('listings')
		.select('*')
		.eq('id', id)
		.single();

	if (error) {
		console.error(error);
		notFound();
	}

	return data;
}

