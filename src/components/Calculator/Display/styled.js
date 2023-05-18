import styled from "styled-components";


export const DisplayWrapper = styled.div`
	grid-area: s;
	padding: 0px 80px 0px 40px;
	display: flex;
	flex-direction: column;
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
	@media (max-width: 600px) {
		padding: 0px 15px;
		padding-bottom: 5px;
	}
`;
export const ExprContainer = styled.div`
	min-height: 50%;
`;
export const Expression = styled.span`
	max-width: 78vw;
	font-size: 27px;
	white-space: nowrap;
	opacity: 0.65;

	@media (max-width: 600px) {
		font-size: 20px;
	}
`;
export const Value = styled.span`
	max-width: 78vw;
	font-size: 30px;
	white-space: nowrap;

	@media (max-width: 600px) {
		font-size: 23px;
	}
`;
