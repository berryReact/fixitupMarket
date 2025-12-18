'use server'

import { CATEGORIES } from "@/app/_lib/utils/constants/categories";
import { createSupabaseServerClient } from '@/app/_lib/supabase/server'
import { redirect } from 'next/navigation';
import { requireUser } from "@/app/_lib/auth/require-user";
import { requireAdmin } from "@/app/_lib/auth/require-user";



//------- 		Private Server Actions			----------///


///			Update User 			///

export async function updateUserAction(formData) {

	const { supabase, user } = await requireUser("/login");

	let publicUrl;

	const bio = formData.get('bio');
	const avatar = formData.get('avatar');

	const hasAvatar = avatar && typeof avatar !== "string" && avatar.size > 0;

	if (hasAvatar) {
		const safeName = avatar.name.replaceAll("/", "");
		const filePath = `${user.id}/${Date.now()}-${safeName}`;

		const { error: uploadError } = await supabase.storage
			.from("profile-images")
			.upload(filePath, avatar, { upsert: true });



		if (uploadError) return { error: uploadError.message };

		const { data: imageData } = supabase.storage
			.from("profile-images")
			.getPublicUrl(filePath);

		publicUrl = imageData.publicUrl;
	}


	const updatePayload = {
		...(bio != null ? { bio } : {}),
		...(publicUrl ? { avatar_url: publicUrl } : {}),
	};


	const { data, error } = await supabase
		.from('profiles')
		.update(updatePayload)
		.eq('id', user.id)
		.select()

	if (error) {
		console.error('Bio Update Failed', error.message);

		return { error: error.message }
	}

	redirect('/account')
}



///			Add Listing 			///


export async function addListingAction(formData) {

	const { supabase, user } = await requireUser("/login");

	const category = formData.get("category");

	const coverImage = formData.get('coverImage');

	if (!coverImage || typeof coverImage === "string" || coverImage.size === 0) {
		return { error: "Please choose an image file" };
	}

	const newListing = {
		sellerId: user.id,
		title: formData.get('title'),
		description: formData.get('description'),
		category,
		whatsWrong: formData.get('whatsWrong'),
		startPrice: Number(formData.get('startPrice')),
		location: formData.get('location'),
		coverImage: ''
	}


	if (!CATEGORIES.includes(category)) {
		return { error: "Invalid category" };
	}

	if (!newListing.title || !newListing.category) {

		return { error: 'Missing required fields' }
	}


	const imageName = `${user.id}/${Date.now()}-${coverImage.name.replaceAll("/", "")}`;

	const { error: uploadError } = await supabase.storage
		.from("listing-images")
		.upload(imageName, coverImage);

	if (uploadError) {
		console.error(uploadError.message);
		return { error: "Image upload failed" };
	}

	const { data } = supabase.storage
		.from("listing-images")
		.getPublicUrl(imageName);

	newListing.coverImage = data.publicUrl;

	const { error } = await supabase.from("listings").insert([newListing]);

	if (error) {
		console.error('create Listing Failed', error.message);

		return { error: error.message }
	}

	redirect('/account/listings')
}


///			Update Listing 			///


export async function updateListingAction(formData) {

	const { supabase, user } = await requireUser("/login");

	const category = formData.get("category");

	const coverImage = formData.get('coverImage');
	const hasImage = coverImage && typeof coverImage !== "string" && coverImage.size > 0;

	const id = formData.get('id')

	const updateListing = {

		title: formData.get('title'),
		description: formData.get('description'),
		category,
		whatsWrong: formData.get('whatsWrong'),
		startPrice: Number(formData.get('startPrice')),
		location: formData.get('location'),

	}

	if (!CATEGORIES.includes(category)) {

		return { error: "Invalid category" };
	}

	if (hasImage) {

		const imageName = `${user.id}/${Date.now()}-${coverImage.name.replaceAll("/", "")}`;

		const { error: uploadError } = await supabase.storage
			.from("listing-images")
			.upload(imageName, coverImage, { upsert: true });

		if (uploadError) {
			console.error(uploadError.message);
			return { error: "Image upload failed" };
		}

		const { data } = supabase.storage
			.from("listing-images")
			.getPublicUrl(imageName);

		updateListing.coverImage = data.publicUrl;

	}

	const { error } = await supabase
		.from("listings")
		.update(updateListing)
		.eq('id', id)
		.eq('sellerId', user.id)
		.single()

	if (error) {
		console.error('Update Listing Failed', error.message);
		return { error: error.message }
	}

	redirect('/account/listings')
}



//------- 		Private ADMIN Server Actions			----------///



///		Update listing as Admin


export async function updateAdminListingAction(formData) {

	const { supabase, user, profile } = await requireAdmin("/login");

	const category = formData.get("category");

	const coverImage = formData.get('coverImage');
	const hasImage = coverImage && typeof coverImage !== "string" && coverImage.size > 0;

	const id = formData.get('id')

	const updateListing = {

		title: formData.get('title'),
		description: formData.get('description'),
		category,
		whatsWrong: formData.get('whatsWrong'),
		startPrice: Number(formData.get('startPrice')),
		location: formData.get('location'),

	}

	if (!CATEGORIES.includes(category)) {

		return { error: "Invalid category" };
	}

	if (hasImage) {

		const imageName = `${user.id}/${Date.now()}-${coverImage.name.replaceAll("/", "")}`;

		const { error: uploadError } = await supabase.storage
			.from("listing-images")
			.upload(imageName, coverImage, { upsert: true });

		if (uploadError) {
			console.error(uploadError.message);
			return { error: "Image upload failed" };
		}

		const { data } = supabase.storage
			.from("listing-images")
			.getPublicUrl(imageName);

		updateListing.coverImage = data.publicUrl;

	}

	const { error } = await supabase
		.from("listings")
		.update(updateListing)
		.eq('id', id)
		.single()

	if (error) {
		console.error('Update Listing Failed', error.message);
		return { error: error.message }
	}

	redirect('/admin/listings')
}




export async function updateAdminRoleAction(formData) {

	const { supabase, user, profile } = await requireAdmin("/login");

	const id = formData.get('id');
	const roleObj = { role: formData.get('role') }

	if (!roleObj) return { error: 'Missing Role' }

	if (profile?.role !== 'supervisor') return { error: 'Role NOT Supervisor' };

	const { error } = await supabase
		.from("profiles")
		.update(roleObj)
		.eq('id', id)

	if (error) {
		console.error('Update Listing Failed', error.message);
		return { error: error.message }

	}
	redirect('/admin/users')
}




export async function updateAdminEnquiryStatusAction(formData) {

	const { supabase, user, profile } = await requireAdmin("/login");

	const id = formData.get('id');

	const updateFields = {

		status: formData.get('status')

	}


	const { error } = await supabase
		.from('enquiries')
		.update(updateFields)
		.eq('id', id)
		.select()

	if (error) { return { error: error.message } }

	redirect('/admin/dashboard')
}




//------- 		Public Server Actions			----------///



/// User Signup


export async function signUpUserFormAction(formData) {

	const supabase = createSupabaseServerClient();

	const email = formData.get('email');
	const password = formData.get('password');

	const { data, error } = await supabase.auth.signUp({
		email,
		password
	})

	if (error) {
		console.error('SignUp Failed', error.message);

		return { error: error.message }
	}
	// redirect('/signup/success')
	redirect('/')
}




/// User Signin

export async function signInUserFormAction(formData) {

	const supabase = createSupabaseServerClient();

	const email = formData.get('email');
	const password = formData.get('password');

	const { data, error } = await supabase.auth.signInWithPassword({
		email, password
	})

	if (error) {
		console.error('Login Failed', error.message);
		return { error: error.message }
	}

	redirect('/account');
}




/// Backend Signin Form		

export async function signInAdminFormAction(formData) {

	const supabase = createSupabaseServerClient();

	const email = formData.get('email');
	const password = formData.get('password');

	const { data, error } = await supabase.auth.signInWithPassword({
		email, password
	})

	if (error) {
		console.error('Login Failed', error.message);
		return { error: error.message }
	}

	redirect('/admin/account/dashboard');
}

/// Backend SignOut Form		

export async function signOutFormAction() {

	const supabase = createSupabaseServerClient();

	const { error } = await supabase.auth.signOut();

	if (error) {

		console.error('Logout failed', error.message)
		return { error: error.message }

	}
	redirect('/')
}




/// contact form

export async function submitContactFormAction(formData) {

	const supabase = createSupabaseServerClient();

	const { error } = await supabase
		.from('enquiries')
		.insert([formData])
		.select()

	if (error) {
		console.error(error);
		return {
			success: false,
			error: 'Message could not be sent'
		}
	}

	return ({ success: true })
}
