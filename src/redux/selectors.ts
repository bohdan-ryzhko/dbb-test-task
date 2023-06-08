import { IInitialState } from "../interfaces/IInitialState";

export const selectIsAuth = (state: IInitialState) => state.isAuth;
export const selectFolders = (state: IInitialState) => state.items;
export const selectName = (state: IInitialState) => state.name;
export const selectIsLoad = (state: IInitialState) => state.isLoad;
export const selectEmail = (state: IInitialState) => state.email;
