import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo } from "../interfaces/UserInfo";

export const getUserInfo = createAsyncThunk<UserInfo>(
	"folders/getUserInfo",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("http://localhost:3001/api/folders");
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
