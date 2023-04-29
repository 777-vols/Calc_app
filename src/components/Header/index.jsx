import { StyledHeader, Container, Header__inner, Menu__list, LinkWrapper, LogoLink, MenuLink } from "./styled";

const Header = () => {

	return (
		<StyledHeader>
			<Container>
				<Header__inner>
					<LinkWrapper>
						<LogoLink to="/">Calculator App</LogoLink>
					</LinkWrapper>

					<nav>
						<Menu__list>
							<li>
								<LinkWrapper>
									<MenuLink to="/">
										Home FC
									</MenuLink>
								</LinkWrapper>
							</li>
							<li>
								<LinkWrapper>
									<MenuLink to="/homeCC">
										Home CC
									</MenuLink>
								</LinkWrapper>
							</li>
							<li>
								<LinkWrapper>
									<MenuLink to="/settings">
										Settings
									</MenuLink>
								</LinkWrapper>
							</li>
						</Menu__list>
					</nav>

				</Header__inner>
			</Container>
		</StyledHeader>
	)
}

export default Header;