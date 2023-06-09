type CustomBoolean = "true" | "false";

const checkBoolean = (value: CustomBoolean) => value === "true";

export const checkValue = (value: string): boolean | string => {
	switch (value) {
		case "true":
			return checkBoolean(value);
		case "false":
			return checkBoolean(value);
		default:
			return value;
	}
};
