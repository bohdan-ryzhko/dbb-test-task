import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";

import { useLocation } from "react-router-dom";
import { setAuth } from "../../redux/authSlice";
import { useAuth } from "../../hooks/useAuth";
import { getUserInfo } from "../../redux/operations";

export const Home: FC = () => {
	const { search } = useLocation();
	const { isAuth } = useAuth();
	const dispatch: AppDispatch = useDispatch();
	
	useEffect(() => {
		dispatch(setAuth(search));

		if (!isAuth) return;

		dispatch(getUserInfo());
		// axios.get("http://localhost:3001/api/folders")
		// 	.then(data => console.log(data))
		// 	.catch(err => console.log(err));

	}, [dispatch, search, isAuth]);

	const handleAuth = () => {
		window.location.href = "http://localhost:3001/api/redirect";
	}

	return (
		<>
			<h1>Home</h1>
			<button onClick={handleAuth}>Auth</button>
		</>
	)
}
