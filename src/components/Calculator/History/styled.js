import styled from "styled-components";


export const HistoryWrapper = styled.div`
	grid-area: h;
	padding-left: 15px;
	border-left: 2px solid ${props => props.theme.color};
	min-width: 20vw;

	@media (max-width: 500px) {
		border-left: none;
		border-top: 2px solid ${props => props.theme.color};
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
	max-height: 79vh;

	@media (max-width: 500px) {
		max-height: 35vh;
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
