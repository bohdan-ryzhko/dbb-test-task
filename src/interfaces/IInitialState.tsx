import { IFolders } from "./IFolders";

export interface IInitialState {
	isLoad: boolean,
	isLoadAuthButton: boolean,
	isAuth: boolean,
	name: string,
	email: string,
	items: IFolders[],
	error?: null | unknown,
}
