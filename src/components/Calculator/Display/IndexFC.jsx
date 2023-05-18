import { useSelector } from "react-redux";
import { DisplayWrapper, ExprContainer, Expression, Value } from "./styled";

const Display = () => {
	const showingResult = useSelector(state => state.home.showingResult);
	const historyItem = useSelector(state => state.home.historyItem);
	const polishArray = useSelector(state => state.home.receiver.getPolishArray());
	const oldExpression = useSelector(state => state.home.oldExpression);
	const oldValue = useSelector(state => state.home.oldValue);
	const currentValue = useSelector(state => state.home.currentValue);
	const result = useSelector(state => state.home.expressionResult);
	return (
		<DisplayWrapper>
			<ExprContainer>
				<Expression>{showingResult ? oldExpression :
					currentValue ? polishArray : historyItem}</Expression>
			</ExprContainer>
			<ExprContainer>
				<Value id="result">{showingResult ? result : currentValue ? currentValue : oldValue}</Value>
			</ExprContainer>
		</DisplayWrapper>
	);
};

export default Display;
