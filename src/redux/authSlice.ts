import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
	handleSetAuth,
	handleUserInfoFulfilled,
	handleUserInfoPending,
	handleUserInfoRejected,
	handleRedirectWindowLocation,
	handleLogoutPending,
	handleLogoutFulfilled,
	handleLogoutRejected,
} from "./handlres";
import { getUserInfo, logout } from "./operations";

const authSlice = createSlice({
	name: "folders",
	initialState,
	reducers: {
		setAuth: handleSetAuth,
		redirectWindowLocation: handleRedirectWindowLocation,
	},
	extraReducers: builder => {
		builder
			.addCase(getUserInfo.pending, handleUserInfoPending)
			.addCase(getUserInfo.fulfilled, handleUserInfoFulfilled)
			.addCase(getUserInfo.rejected, handleUserInfoRejected)
			.addCase(logout.pending, handleLogoutPending)
			.addCase(logout.fulfilled, handleLogoutFulfilled)
			.addCase(logout.rejected, handleLogoutRejected)
	}
});

export const { setAuth, redirectWindowLocation } = authSlice.actions;
export const authReducer = authSlice.reducer;
