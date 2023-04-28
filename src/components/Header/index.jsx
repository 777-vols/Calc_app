import { StyledHeader, Container, Header__inner, Logo, Menu, Menu__list, Menu__list_item, LogoLink, MenuLink } from "./styled";

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Header__inner>
					<Logo>
						<LogoLink to="/">Calculator App</LogoLink>
					</Logo>

					<Menu>
						<Menu__list>
							<Menu__list_item>
								<MenuLink to="/">
									Home FC
								</MenuLink>
							</Menu__list_item>
							<Menu__list_item>
								<MenuLink to="/homeCC">
									Home CC
								</MenuLink>
							</Menu__list_item>
							<Menu__list_item>
								<MenuLink to="/settings">
									Settings
								</MenuLink>
							</Menu__list_item>
						</Menu__list>
					</Menu>

				</Header__inner>
			</Container>
		</StyledHeader>
	)
}

export default Header;