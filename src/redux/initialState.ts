import { IInitialState } from "../interfaces/IInitialState";

export const initialState: IInitialState = {
	isLoad: false,
	isLoadAuthButton: false,
	isAuth: false,
	name: "",
	email: "",
	items: [],
	error: null,
}