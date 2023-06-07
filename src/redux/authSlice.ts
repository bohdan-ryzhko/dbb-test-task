import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
	handleSetAuth,
	handleUserInfoFulfilled,
	handleUserInfoPending,
	handleUserInfoRejected,
} from "./handlres";
import { getUserInfo } from "./operations";

const authSlice = createSlice({
	name: "folders",
	initialState,
	reducers: {
		setAuth: handleSetAuth,
	},
	extraReducers: builder => {
		builder
			.addCase(getUserInfo.pending, handleUserInfoPending)
			.addCase(getUserInfo.fulfilled, handleUserInfoFulfilled)
			.addCase(getUserInfo.rejected, handleUserInfoRejected)
	}
});

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
