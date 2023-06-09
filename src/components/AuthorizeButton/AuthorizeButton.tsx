import sass from "./AuthorizeButton.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderButton } from "../LoaderButton/LoaderButton";
import { logout } from "../../redux/operations";
import { useAuth } from "../../hooks/useAuth";
import { redirectWindowLocation } from "../../redux/authSlice";

interface AuthorizeButtonProps {
	isAuth: boolean,
}

export const AuthorizeButton: FC<AuthorizeButtonProps> = ({ isAuth }) => {
	const [isLoadButton, setIsLoadButton] = useState<boolean>(false);
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();
	const setAuthText = isAuth ? "Log out" : "Authorizing with Dropbox";
	const { email } = useAuth();

	const handleAuth = (isAuth: boolean) => () => {
		if (!isAuth) {
			setIsLoadButton(true);
			dispatch(redirectWindowLocation());
			return;
		}
		navigate({ search: "" });
		dispatch(logout(email));
	}

	return (
		<button onClick={handleAuth(isAuth)} className={isAuth ? sass.logoutBtn : sass.authBtn}>
			{
				isLoadButton ? <LoaderButton /> : <span>{setAuthText}</span>
			}
		</button>
	)
};
