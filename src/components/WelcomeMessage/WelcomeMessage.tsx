import sass from "./WelcomeMessage.module.scss";
import { FC } from "react";

interface WelcomeMessageProps {
	isAuth: boolean,
	name: string,
}

export const WelcomeMessage: FC<WelcomeMessageProps> = ({ isAuth, name }) => {
	return (
		<div>
			{
				isAuth
					? <p className={sass.welcomeMessage}>Welcome, {name}</p>
					: <p className={sass.welcomeMessage}>To see your Dropbox folders - click Authorize with Dropbox</p>
			}
		</div>
	)
};
