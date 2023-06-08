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
	if (!access) {
		state.email = "";
		state.name = "";
		state.isAuth = false;
		return;
	}
	console.log(name)
	state.name = checkValue(name) as string;
	state.email = checkValue(email) as string;
	state.isAuth = checkValue(access) as boolean;
}
