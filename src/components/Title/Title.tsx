import sass from "./Title.module.scss";
import { FC } from "react";

interface TitleProps {
	title: string,
}

export const Title: FC<TitleProps> = ({ title }) => (
	<h2 className={sass.title}>{title}</h2>
);