import { IFolders } from "./IFolders";

export interface UserInfo {
	entries: IFolders[],
	cursor: string,
	has_more: boolean,
}