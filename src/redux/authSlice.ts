import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
	handleSetAuth,
	handleUserInfoFulfilled,
	handleUserInfoPending,
	handleUserInfoRejected,
} from "./handlres";
import { getUserInfo, logout } from "./operations";

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
			.addCase(logout.pending, state => {
				state.isLoad = true;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoad = false;
				console.log(action.payload);
				state.items = [];
				state.isAuth = false;
			})
			.addCase(logout.rejected, (state, action) => {
				state.isLoad = false;
				console.log(action.payload);
				state.error = action.payload;
			})
	}
});

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
