import styled from "styled-components";

export const CalculatorWrapper = styled.div`
	display: grid;
	height: 86.7vh;

	grid-template-areas:
		"s h"
		"k h";

	grid-template-rows: 1fr 8fr;
	grid-template-columns: 5fr 1fr;
	grid-gap: 15px;

	@media (max-width: 500px) {
		grid-template-areas:
		"s"
		"k"
		"h";

		grid-template-rows: 10fr 40fr auto;
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}
`;

