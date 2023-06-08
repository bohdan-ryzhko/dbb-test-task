import sass from "./Header.module.scss";
import { FC } from "react";

import { StyledLink } from "../StyledLink/StyledLink";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "../Container/Container";
import { AuthorizeButton } from "../AuthorizeButton/AuthorizeButton";

export const Header: FC = () => {
	const { isAuth } = useAuth();

	return (
		<header className={sass.header}>
			<Container>
				<div className={sass.navInner}>
					<nav className={sass.navigation}>
						<ul className={sass.navigationList}>
							<li>
								<StyledLink to="/" text="Home" />
							</li>
							{
								isAuth &&
								<li>
									<StyledLink to="/files" text="Files" />
								</li>
							}
						</ul>
					</nav>
					<div>
						<AuthorizeButton isAuth={isAuth} />
					</div>
				</div>
			</Container>
		</header>
	)
}
