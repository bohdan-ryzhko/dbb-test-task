const checkValue = (value: string) : boolean => value === "true";

export const convertQueryStringToObject = (string: string) : { [key: string]: boolean } => {
	const searchParams = new URLSearchParams(string);
	const obj: { [key: string]: boolean } = {};

	for (const [key, value] of searchParams.entries()) {
		const convertValue = checkValue(value);
		obj[key] = convertValue;
	}

	return obj;
}
