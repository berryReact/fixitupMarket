import { createSupabaseServerClient } from '@/app/_lib/supabase/server'
import { requireUser } from "@/app/_lib/auth/require-user";

///-------------	Private Data-Services		-------------///

export async function getMyListings() {

	const { supabase, user } = await requireUser("/login");

	const { data, error } = await supabase
		.from("listings")
		.select("*")
		.eq("sellerId", user.id)
		.order("createdAt", { ascending: false });

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









//----------- 	Public Data-Services	-------------///


/// get latest items

export const getLatestItems = async function () {

	const supabase = createSupabaseServerClient();

	const { data, error } = await supabase
		.from('listings')
		.select('id, title,category , startPrice, location ,createdAt,coverImage')
		.order('createdAt', { ascending: false })


	if (error) {
		console.error(error);
		throw new Error('Latest Items could not be loaded');
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
	}

	return data;
}

