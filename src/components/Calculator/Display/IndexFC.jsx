import { useSelector } from "react-redux";
import { DisplayWrapper, Result } from "./styled";

const Display = () => {
	const result = useSelector(state => state.home.currentResult);
	const showingResult = useSelector(state => state.home.receiver.showingResult);
	const expression = useSelector(state => state.home.historyItem);
	return (
		<DisplayWrapper>
			<Result>{showingResult ? result : expression}</Result>
		</DisplayWrapper>
	);
};

export default Display;
