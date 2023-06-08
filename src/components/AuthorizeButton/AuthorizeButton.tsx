import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import sass from "./AuthorizeButton.module.scss";
import { FC } from "react";
import { logout } from "../../redux/authSlice";

interface AuthorizeButtonProps {
	isAuth: boolean,
}

export const AuthorizeButton: FC<AuthorizeButtonProps> = ({ isAuth }) => {

	const dispatch: AppDispatch = useDispatch();

	const handleAuth = (isAuth: boolean) => {
		if (!isAuth) {
			window.location.href = "http://localhost:3001/api/redirect";
		}
		
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
