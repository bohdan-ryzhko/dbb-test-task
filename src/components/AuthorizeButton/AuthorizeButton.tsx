import sass from "./AuthorizeButton.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { FC, useState } from "react";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { LoaderButton } from "../LoaderButton/LoaderButton";

interface AuthorizeButtonProps {
	isAuth: boolean,
}

export const AuthorizeButton: FC<AuthorizeButtonProps> = ({ isAuth }) => {
	const [isLoadButton, setIsLoadButton] = useState<boolean>(false);
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();
	const setAuthText = isAuth ? "Log out" : "Authorizing with Dropbox";

	const handleAuth = (isAuth: boolean) => () => {
		if (!isAuth) {
			setIsLoadButton(true);
			window.location.href = "http://localhost:3001/api/redirect";
			return;
		}
		navigate({ search: "" });
		dispatch(logout());
	}

	return (
		<button onClick={handleAuth(isAuth)} className={isAuth ? sass.logoutBtn : sass.authBtn}>
			{
				isLoadButton ? <LoaderButton /> : <span>{setAuthText}</span>
			}
		</button>
	)
};
