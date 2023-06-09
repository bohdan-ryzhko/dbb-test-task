import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
	handleSetAuth,
	handleUserInfoFulfilled,
	handleUserInfoPending,
	handleUserInfoRejected,
	handleRedirectWindowLocation,
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
			.addCase(logout.pending, state => {
				state.isLoad = true;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoad = false;
				state.items = [];
				state.isAuth = false;
			})
			.addCase(logout.rejected, (state, action) => {
				state.isLoad = false;
				state.error = action.payload;
			})
	}
});

export const { setAuth, redirectWindowLocation } = authSlice.actions;
export const authReducer = authSlice.reducer;
