import styled from "styled-components";


export const DisplayWrapper = styled.div`
	grid-area: s;
	padding: 0px 80px 0px 40px;
	display: flex;
	align-items: flex-end;
	justify-content: end;
	overflow-x: auto;
	min-height: 7vh;

	::-webkit-scrollbar {
		height: 5px;
	}

	::-webkit-scrollbar-track {
		border-radius: 8px;
	}

	::-webkit-scrollbar-thumb {
		background: rgb(52, 52, 52);
		border-radius: 10px;
	}

	@media (max-width: 750px) {
		padding: 0px 20px;
	}
	@media (max-width: 500px) {
		padding: 0px 15px;
		padding-bottom: 5px;
	}
`;
export const Result = styled.span`
	max-width: 78vw;
	font-size: 42px;

	@media (max-width: 750px) {
		font-size: 35px;
	}
	@media (max-width: 500px) {
		font-size: 30px;
	}
`;
