import styled from "styled-components";

export const ControlPanelWrapper = styled.div`
	grid-area: p;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 2px solid ${props => props.theme.color};
	flex-direction: column;
	padding-left: 15px;
	min-width: 20vw;
	
	@media (max-width: 1000px) {
		min-width: 25vw;
	}

	@media (max-width: 600px) {
		max-height: 80px;
		border-left: none;
	}
`;
export const ControlPanelHeader = styled.h5`
	font-size: 18px;
	font-weight: 500;
`;
export const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 7px;
`;
export const ControlPanelButton = styled.button`
	padding: 5px;
	font-size: 17px;
	border-radius: 10px;
	border: 2px solid ${props => props.theme.color};
	transition: 0.1s;
	background-color: ${props => props.theme.buttonBackground};
	color:${props => props.theme.color};

	&:hover{
		background-color: rgba(255, 255, 255, 0.7);
	}
`;

