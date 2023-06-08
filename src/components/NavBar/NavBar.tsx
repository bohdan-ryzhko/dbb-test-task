import sass from "./NavBar.module.scss";
import { FC } from "react";

import { StyledLink } from "../StyledLink/StyledLink";
import { useAuth } from "../../hooks/useAuth";

export const NavBar: FC = () => {
	const { isAuth } = useAuth();

	return (
		<div className={sass.navWrapper}>
			<div className={sass.navInner}>
				<nav className={sass.navigation}>
					<ul className={sass.navigationList}>
						<li>
							<StyledLink to="/" text="Home" />
						</li>
						{
							isAuth &&
							<li>
								<StyledLink to="/files" text="Your files" />
							</li>
						}
					</ul>
				</nav>
			</div>
		</div>
	)
}
