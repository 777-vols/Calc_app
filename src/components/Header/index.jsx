import * as urls from "@constants/urls";

import { Container, HeaderInner, LinkWrapper, LogoLink, MenuLink, MenuList, StyledHeader } from "./styled";

const Header = () => {

	return (
		<StyledHeader>
			<Container>
				<HeaderInner>
					<LinkWrapper>
						<LogoLink link_test="logo" to={urls.baseUrl}>Calculator App</LogoLink>
					</LinkWrapper>

					<nav>
						<MenuList>
							<li>
								<LinkWrapper>
									<MenuLink link_test="home_fc" to={urls.homeFC}>
										Home FC
									</MenuLink>
								</LinkWrapper>
							</li>
							<li>
								<LinkWrapper>
									<MenuLink link_test="home_cc" to={urls.homeCC}>
										Home CC
									</MenuLink>
								</LinkWrapper>
							</li>
							<li>
								<LinkWrapper>
									<MenuLink link_test="settings" to={urls.settings}>
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