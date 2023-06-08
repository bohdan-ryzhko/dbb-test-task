import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo } from "../interfaces/UserInfo";
import { IInitialState } from "../interfaces/IInitialState";

export const getUserInfo = createAsyncThunk<UserInfo>(
	"folders/getUserInfo",
	async (_, thunkAPI) => {
		try {
			const { email } = thunkAPI.getState() as IInitialState;
			const response = await axios.get(`http://localhost:3001/api/folders?email=${email}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk<any, string>(
	"folders/logout",
	async (email, thunkAPI) => {
		try {
			const response = await axios.delete(`http://localhost:3001/api/folders/${email}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
