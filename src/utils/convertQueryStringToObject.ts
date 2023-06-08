export const convertQueryStringToObject = (string: string): { [key: string]: string } => {
	const searchParams = new URLSearchParams(string);
	const obj: { [key: string]: string } = {};

	for (const [key, value] of searchParams.entries()) {
		obj[key] = value;
	}

	return obj;
}
