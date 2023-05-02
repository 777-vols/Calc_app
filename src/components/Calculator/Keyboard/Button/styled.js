import styled from "styled-components";


export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Button = styled.button`
	width: 105px;
	height: 105px;
	font-size: 42px;
	border-radius: 20px;
	border: 2px solid grey;
	
	&:hover{
		background-color: rgba(255, 255, 255, 0.7);
	}

	@media (max-width: 750px) {
		max-width: 70px;
		max-height: 70px;
		font-size: 30px;
	}
	@media (max-width: 500px) {
		max-width: 45px;
		max-height: 45px;
		font-size: 22px;
		border-radius: 15px;
	}
`;
