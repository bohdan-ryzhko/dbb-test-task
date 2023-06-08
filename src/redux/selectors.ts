import { IInitialState } from "../interfaces/IInitialState";

export const selectIsAuth = (state: IInitialState) => state.isAuth;
export const selectFolders = (state: IInitialState) => state.items;
