import { useSelector } from "react-redux";
import { DisplayWrapper, Result } from "./styled";

const Display = () => {
	const result = useSelector(state => state.home.currentValue);
	return (
		<DisplayWrapper>
			<Result>{result}</Result>
		</DisplayWrapper>
	);
};

export default Display;
