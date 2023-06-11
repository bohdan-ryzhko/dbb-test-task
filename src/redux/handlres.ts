import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "../interfaces/IInitialState";
import { UserInfo } from "../interfaces/UserInfo";
import { convertQueryStringToObject } from "../utils/convertQueryStringToObject";
import { checkValue } from "../utils/checkValue";

export const handleUserInfoPending: CaseReducer<IInitialState> = (state) => {
	state.isLoad = true;
}

export const handleUserInfoFulfilled: CaseReducer<IInitialState, PayloadAction<UserInfo>> = (state, action) => {
	state.isLoad = false;
	state.error = null;
	state.items = action.payload.entries;
}

export const handleUserInfoRejected: CaseReducer<IInitialState, PayloadAction<unknown>> = (state, action) => {
	state.isLoad = false;
	state.error = action.payload;
}

export const handleSetAuth: CaseReducer<IInitialState, PayloadAction<string>> = (state, action) => {
	const { access, email, name } = convertQueryStringToObject(action.payload);

	state.name = checkValue(name) as string;
	state.email = checkValue(email) as string;
	state.isAuth = checkValue(access) as boolean;
}

export const handleRedirectWindowLocation: CaseReducer<IInitialState, PayloadAction<string>> = (state, action) => {
	state.isLoadAuthButton = action.payload === "redirect";
	window.location.href = `http://localhost:3001/api/${action.payload}`;
}

export const handleLogoutPending: CaseReducer<IInitialState> = (state) => {
	state.isLoad = true;
	state.isLoadAuthButton = true;
}

export const handleLogoutFulfilled: CaseReducer<IInitialState> = (state) => {
	state.isLoad = false;
	state.isLoadAuthButton = false;
	state.name = "";
	state.email = "";
	state.items = [];
	state.isAuth = false;
}

export const handleLogoutRejected: CaseReducer<IInitialState, PayloadAction<unknown>> = (state, action) => {
	state.isLoad = false;
	state.isLoadAuthButton = false;
	state.error = action.payload;
}
