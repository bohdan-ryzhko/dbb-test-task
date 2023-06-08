export const checkValue = (value: string): boolean | string => {
	switch (value) {
		case "true":
			return true;
		case "false":
			return false;
		default:
			return value;
	}
};
