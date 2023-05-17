import styled from "styled-components";


export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const DivButtonContainer = styled.div`
	position: relative;
`;
export const Button = styled.button`
	width: 105px;
	height: 105px;
	font-size: 42px;
	border-radius: 20px;
	border: 2px solid ${props => props.theme.color};
	transition: 0.1s;
	background-color: ${props => props.theme.buttonBackground};
	color:${props => props.theme.color};

	&:hover{
		background-color: rgba(255, 255, 255, 0.7);
	}

	@media (max-width: 750px) {
		max-width: 70px;
		max-height: 70px;
		font-size: 30px;
	}
	@media (max-width: 600px) {
		max-width: 50px;
		max-height: 50px;
		font-size: 22px;
		border-radius: 15px;
	}
`;
