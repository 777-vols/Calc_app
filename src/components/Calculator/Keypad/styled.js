import styled from "styled-components";

export const KeypadWrapper = styled.div`
	grid-area: k;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(4, 1fr);
	border-top: 2px solid ${props => props.theme.color};

	@media (max-width: 600px) {
		border-bottom: 2px solid ${props => props.theme.color};
	}
`;