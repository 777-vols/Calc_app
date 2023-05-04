import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	font-family: 'Roboto', sans-serif;
	max-width: 100vw;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	background-color: rgb(255 229 229);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ErrorPage = styled.div`
	min-height: 250px;
	min-width: 250px;
	width: 700px;
	height: 700px;
	display: flex;
	justify-content: center;
	background-image: url(../../../error.svg);
	@media (max-width:700px) {
		width: 500px;
		height: 500px;
	}
	@media (max-width:500px) {
		width: 400px;
		height: 400px;
	}
	@media (max-width:400px) {
		width: 300px;
		height: 300px;
	}
	@media (max-width:300px) {
		width: 200px;
		height: 200px;
	}
`;