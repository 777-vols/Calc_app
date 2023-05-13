import { StyledHeader, Container, HeaderInner, MenuList, LinkWrapper, LogoLink, MenuLink } from "./styled";

const Header = () => {

	return (
		<StyledHeader>
			<Container>
				<HeaderInner>
					<LinkWrapper>
						<LogoLink link_test="logo" to="/">Calculator App</LogoLink>
					</LinkWrapper>

					<nav>
						<MenuList>
							<li>
								<LinkWrapper>
									<MenuLink link_test="home_fc" to="/">
										Home FC
									</MenuLink>
								</LinkWrapper>
							</li>
							<li>
								<LinkWrapper>
									<MenuLink link_test="home_cc" to="/homeCC">
										Home CC
									</MenuLink>
								</LinkWrapper>
							</li>
							<li>
								<LinkWrapper>
									<MenuLink link_test="settings" to="/settings">
										Settings
									</MenuLink>
								</LinkWrapper>
							</li>
						</MenuList>
					</nav>

				</HeaderInner>
			</Container>
		</StyledHeader>
	);
};

export default Header;