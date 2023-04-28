import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const StyledHeader = styled.header`
	background: rgb(52, 52, 52);
`
export const Container = styled.div`
	max-width: 100%;
	padding: 15px;
`
export const Header__inner = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const Logo = styled.div`

`
export const Menu = styled.nav`

`
export const Menu__list = styled.nav`
	min-width: 300px;
	display: flex;
	justify-content: space-between;
`
export const Menu__list_item = styled.nav`

`

export const LogoLink = styled(NavLink)`
	cursor: pointer;
	font-size: 20px;
	text-decoration: none;
	color: #fef6f6;
`
export const MenuLink = styled(NavLink)`
	text-decoration: none;
	cursor: pointer;
	font-size: 18px;
	color: rgba(255, 255, 255, 0.7);
	transition: 0.1s;

	&[aria-current] {
		color: #fef6f6;
		text-decoration: underline;
	}
`

