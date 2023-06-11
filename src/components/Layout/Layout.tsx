import sass from "./Layout.module.scss";
import { FC } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";

export const Layout: FC = () => (
	<>
		<Header />
		<main className={sass.main}>
			<Container>
				<Outlet />
			</Container>
		</main>
	</>
);
