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
	min-height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const Menu__list = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`
export const LinkWrapper = styled.div`
	padding: 0 20px 0 20px;

	@media (max-width: 600px) {
   	padding: 0 7px 0 7px;
	}
`
export const LogoLink = styled(NavLink)`
	cursor: pointer;
	font-size: 21px;
	text-decoration: none;
	color: #fef6f6;
	white-space: nowrap;

	@media (max-width: 600px) {
   	font-size: 16px;
	}
`
export const MenuLink = styled(NavLink)`
	text-decoration: none;
	cursor: pointer;
	font-size: 19px;
	color: rgba(255, 255, 255, 0.7);
	transition: 0.2s;
	white-space: nowrap;

	&:hover{
		color: #fef6f6;
	}

	&[aria-current] {
		text-decoration: none;
		color: #fef6f6;

		&::after {
			margin-top: 1px;
			content: "";
			display: block;
			width: 100%;
			height: 2px;
			background-color: white;
		}
	}

	@media (max-width: 600px) {
   	font-size: 15px;
	}

	@media (max-width: 375px) {
		display: inline-block;
   	margin: 2px 0;
	}
`

