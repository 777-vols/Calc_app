import { useSelector } from "react-redux";
import { DisplayWrapper, Result } from "./styled";

const Display = () => {
	const result = useSelector(state => state.home.currentResult);
	const showingResult = useSelector(state => state.home.receiver.showingResult);
	const currentValue = useSelector(state => state.home.currentValue);
	return (
		<DisplayWrapper>
			<Result>{showingResult ? result : currentValue}</Result>
		</DisplayWrapper>
	);
};

export default Display;
