import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo } from "../interfaces/UserInfo";
import { IInitialState } from "../interfaces/IInitialState";
import { toast } from "react-toastify";

type Controller = {
	signal: AbortSignal;
};

export const getUserInfo = createAsyncThunk<UserInfo, Controller>(
	"folders/getUserInfo",
	async (controller, thunkAPI) => {
		try {
			const { email } = thunkAPI.getState() as IInitialState;

			const response: AxiosResponse<UserInfo> = await axios.get(`http://localhost:3001/api/folders?email=${email}`, {
				signal: controller.signal
			});
			return response.data;
		} catch (error: any) {
			toast.error(error.name);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk<any, string>(
	"folders/logout",
	async (email, thunkAPI) => {
		try {
			const response: AxiosResponse<{ message: string }> = await axios.delete(`http://localhost:3001/api/folders/${email}`);

			if (response.status === 200) toast.success("Logout success");

			return response.data;
		} catch (error) {
			toast.error("Logout error");
			return thunkAPI.rejectWithValue(error);
		}
	}
);
