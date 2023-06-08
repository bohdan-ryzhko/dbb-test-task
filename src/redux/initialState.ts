import { IInitialState } from "../interfaces/IInitialState";

export const initialState: IInitialState = {
	isLoad: false,
	isAuth: false,
	name: "",
	email: "",
	items: [],
	error: null,
}