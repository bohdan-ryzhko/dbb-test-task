import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";

import { useLocation } from "react-router-dom";
import { setAuth } from "../../redux/authSlice";
import { useAuth } from "../../hooks/useAuth";

export const Home: FC = () => {
	const { search } = useLocation();
	const { isAuth } = useAuth();
	const dispatch: AppDispatch = useDispatch();
	
	useEffect(() => {
		if (!isAuth) {
			dispatch(setAuth(search));
			return;
		};

	}, [dispatch, search, isAuth]);

	return (
		<>
			<h1>Home</h1>
		</>
	)
}
