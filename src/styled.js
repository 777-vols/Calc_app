import styled from "styled-components";

export const AppWrapper = styled.div`
	font-family: 'Roboto', sans-serif;
	max-width: 100%;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;