import { FC } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";

export const Layout: FC = () => (
	<>
		<Header />
		<main>
			<Container>
				<Outlet />
			</Container>
		</main>
	</>
);
