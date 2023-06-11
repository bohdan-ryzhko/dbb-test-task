import sass from "./AuthorizeButton.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderButton } from "../LoaderButton/LoaderButton";
import { logout } from "../../redux/operations";
import { useAuth } from "../../hooks/useAuth";
import { redirectWindowLocation } from "../../redux/authSlice";
import { SetAuthTextButton } from "../../types/SetAuthTextButton";
import { AUTHORIZE, LOGOUT } from "../../constants/authTextButton";

interface AuthorizeButtonProps {
	isAuth: boolean,
}

export const AuthorizeButton: FC<AuthorizeButtonProps> = ({ isAuth }) => {
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const setAuthText: SetAuthTextButton = isAuth ? LOGOUT : AUTHORIZE;
	const { email, isLoadAuthButton } = useAuth();

	const handleAuth = (isAuth: boolean) => () => {
		if (!isAuth) {
			dispatch(redirectWindowLocation("redirect"));
			return;
		}
		navigate({ search: "" });
		dispatch(logout(email));
	}

	return (
		<button onClick={handleAuth(isAuth)} className={isAuth ? sass.logoutBtn : sass.authBtn}>
			{
				isLoadAuthButton ? <LoaderButton /> : <span>{setAuthText}</span>
			}
		</button>
	)
};
