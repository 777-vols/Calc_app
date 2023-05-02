import { StyledHeader, Container, HeaderInner, MenuList, LinkWrapper, LogoLink, MenuLink } from "./styled";

const Header = () => {

	return (
		<StyledHeader>
			<Container>
				<HeaderInner>
					<LinkWrapper>
						<LogoLink to="/">Calculator App</LogoLink>
					</LinkWrapper>

					<nav>
						<MenuList>
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
						</MenuList>
					</nav>

				</HeaderInner>
			</Container>
		</StyledHeader>
	);
};

export default Header;