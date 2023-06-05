import sass from "./NavBar.module.scss";
import { FC } from "react";
import { StyledLink } from "../StyledLink/StyledLink";

import links from "../../collections/nav-links.json";

export const NavBar:FC = () => {
	return (
		<div className={sass.navWrapper}>
			<div className={sass.navInner}>
				<nav className={sass.navigation}>
					<ul className={sass.navigationList}>
						{
							links.map(link =>
								<li key={link.id}>
									<StyledLink to={link.to} text={link.text} />
								</li>
							)
						}
					</ul>
				</nav>
			</div>
		</div>
	)
}
