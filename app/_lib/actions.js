'use server'


export async function submitContactFormAction(formData) {

	console.log(formData)

	return ({ success: true })

	// return ({
	// 	success: false,
	// 	error: 'Test error'
	// })
}