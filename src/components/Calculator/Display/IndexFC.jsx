import { useSelector } from "react-redux";
import { DisplayWrapper, Result } from "./styled";

const Display = () => {
	const result = useSelector(state => state.home.expressionResult);
	const showingResult = useSelector(state => state.home.showingResult);
	const expression = useSelector(state => state.home.historyItem);
	return (
		<DisplayWrapper>
			<Result id="result">{showingResult ? result : expression}</Result>
		</DisplayWrapper>
	);
};

export default Display;
