import { IFolders } from "./IFolders";

export interface IInitialState {
	isLoad: boolean,
	isAuth: boolean,
	items: IFolders[],
	error?: null | unknown,
}
