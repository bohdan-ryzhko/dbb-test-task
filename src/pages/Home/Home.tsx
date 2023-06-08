import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";

import { useLocation } from "react-router-dom";
import { setAuth } from "../../redux/authSlice";
import { useAuth } from "../../hooks/useAuth";
import { Title } from "../../components/Title/Title";
import { WelcomeMessage } from "../../components/WelcomeMessage/WelcomeMessage";

export const Home: FC = () => {
	const { search } = useLocation();
	const { isAuth, name } = useAuth();
	const dispatch: AppDispatch = useDispatch();
	
	useEffect(() => {
		if (!isAuth) {
			dispatch(setAuth(search));
			return;
		};

	}, [dispatch, search, isAuth]);
	return (
		<>
			<Title title="Home" />
			<WelcomeMessage isAuth={isAuth} name={name} />
		</>
	)
}
