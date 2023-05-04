import { DisplayWrapper, Result } from "./styled";

const Display = ({ result }) => {
	return (
		<DisplayWrapper>
			<Result>{result}</Result>
		</DisplayWrapper>
	);
};

export default Display;
