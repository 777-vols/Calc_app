import styled from "styled-components";


export const ButtonWrapper = styled.div`
	position: absolute;
	bottom: 4px;
	right: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 750px) {
		bottom: 5px;
		right: 5px;
	}
	@media (max-width: 600px) {
		bottom: 4px;
		right: 4px;
	}
`;
export const Button = styled.button`
	width: 40px;
	height: 40px;
	font-size: 20px;
	border-radius: 20px;
	border: 2px solid ${props => props.theme.color};
	transition: 0.1s;
	background-color: rgb(255, 32, 32, .7);
	color:${props => props.theme.color}; 

	&:hover{
	border: 2px solid green;
}

	@media (max-width: 750px) {
		width: 25px;
		height: 25px;
		font-size: 12px;
	}
	@media (max-width: 600px) {
		width: 21px;
		height: 21px;
		font-size: 10px;
		border-radius: 10px;
	}
`;
