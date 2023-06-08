import sass from "./AuthorizeButton.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { FC } from "react";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

interface AuthorizeButtonProps {
	isAuth: boolean,
}

export const AuthorizeButton: FC<AuthorizeButtonProps> = ({ isAuth }) => {

	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const handleAuth = (isAuth: boolean) => {
		if (!isAuth) {
			window.location.href = "http://localhost:3001/api/redirect";
			return;
		}
		navigate({ search: "" });
		dispatch(logout());
	}

	return (
		<button onClick={() => handleAuth(isAuth)} className={sass.authBtn}>
			{
				isAuth ? "Log out" : "Authorizing with Dropbox"
			}
		</button>
	)
};
