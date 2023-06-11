import sass from "./ErrorText.module.scss";
import { FC } from "react";

interface ErrorTextProps {
	text: string,
}

export const ErrorText: FC<ErrorTextProps> = ({ text }) => (
	<p className={sass.erroText}>{text}</p>
);
