import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";

import { useLocation, useNavigate } from "react-router-dom";
import { setAuth } from "../../redux/authSlice";
import { useAuth } from "../../hooks/useAuth";
import { Title } from "../../components/Title/Title";
import { WelcomeMessage } from "../../components/WelcomeMessage/WelcomeMessage";
import { convertQueryStringToObject } from "../../utils/convertQueryStringToObject";
import { toast } from "react-toastify";

export const Home: FC = () => {
	const { search } = useLocation();
	const { isAuth, name } = useAuth();
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();
	const { access } = convertQueryStringToObject(search);
	
	useEffect(() => {
		if (!isAuth) {
			dispatch(setAuth(search));
			return;
		};

		if (access) toast.success("Authorization success");
		navigate({ search: "" });

	}, [dispatch, search, isAuth, navigate, access]);
	return (
		<>
			<Title title="Home" />
			<WelcomeMessage isAuth={isAuth} name={name} />
		</>
	)
}
