import styled from "styled-components";

export const KeyboardWrapper = styled.div`
	grid-area: k;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(4, 1fr);
	border-top: 2px solid grey;

	@media (max-width: 750px) {
		min-height: 50vh
	}
	@media (max-width: 500px) {
		min-height: 36vh
	}
`;