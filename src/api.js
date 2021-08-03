const apiValidatePhoneNumber = "http://apilayer.net/api/validate?access_key=6b5739224290d91f8c7a860dce9a6efd"

export function getValidate(number) {
	return fetch(`${apiValidatePhoneNumber}&number=${number}&country_code=RU&format=1`)
		.then(res => res.json())
}