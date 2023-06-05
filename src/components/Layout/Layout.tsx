import { FC } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";

export const Layout: FC = () => (
	<>
		<NavBar />
		<main>
			<Container>
				<Outlet />
			</Container>
		</main>
	</>
);
