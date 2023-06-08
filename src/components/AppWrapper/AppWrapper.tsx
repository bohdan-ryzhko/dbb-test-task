import sass from "./AppWrapper.module.scss";
import { FC, ReactNode } from "react";

interface AppWrapperProps {
	children: ReactNode,
}

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
	<div className={sass.wrapper}>{children}</div>
);
