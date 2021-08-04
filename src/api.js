const apiValidatePhoneNumber = "https://phonevalidation.abstractapi.com/v1/?api_key=65ee17068049496b986a09462736e299"

export function getValidate(number) {
	return fetch(`${apiValidatePhoneNumber}&phone=7${number}`)
		.then(res => res.json())
}