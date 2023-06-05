import sass from "./StyledLink.module.scss";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface StyledLinkProps {
	to: string,
	text: string
}

export const StyledLink: FC<StyledLinkProps> = ({ to, text }) => {
	const { pathname } = useLocation();

	return (
		<Link className={pathname === to ? sass.activeLink : sass.link} to={to}>{text}</Link>
	);
}
