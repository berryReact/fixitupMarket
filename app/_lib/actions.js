'use server'

import { createSupabaseServerClient } from '@/app/_lib/supabase/server'

import { redirect } from 'next/navigation';

import { requireUser } from "@/app/_lib/auth/require-user";

//------- 		Private Server Actions			----------///


export async function updateUserAction(formData) {

	const { supabase, user } = await requireUser("/login");

	const role = formData.get('role')

	const { data, error } = await supabase
		.from('profiles')
		.update({ role })
		.eq('id', user.id)
		.select()

	if (error) {
		console.error('Role Update Failed', error.message);

		return { error: error.message }
	}

	redirect('/account')
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

