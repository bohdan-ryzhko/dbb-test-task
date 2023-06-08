import { IFolders } from "./IFolders";

export interface UserInfo {
	email: string,
	entries: IFolders[],
	cursor: string,
	has_more: boolean,
}