import styled from "styled-components";


export const HistoryWrapper = styled.div`
	grid-area: h;
	padding-left: 15px;
	border-left: 2px solid ${props => props.theme.color};
	min-width: 20vw;
	
	@media (max-width: 1000px) {
		min-width: 25vw;
	}
	@media (max-width: 600px) {
		border-left: none;
	}
`;
export const HistoryHeaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px 0;
	`;
export const HistoryHeader = styled.h2`
	font-weight: 500;
	font-size: 22px;
	`;
export const HistoryResults = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	overflow: auto;
	max-height: 71vh;

	@media (max-width: 600px) {
		max-height: 24vh;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		border-radius: 8px;
	}

	::-webkit-scrollbar-thumb {
		background: rgb(52, 52, 52);
		border-radius: 10px;
	}
`;
