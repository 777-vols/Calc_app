import {
	clearAll,
	clearExpression,
	clearHistory,
	equal,
	inputValue,
	leftBracket,
	operator,
	rightBracket
} from "@store/slices/HomeSlice";

const ButtonsClickHandler = (dispatch, buttonValue) => {
	if (Number.isFinite(+buttonValue) || buttonValue === ".") {
		dispatch(inputValue(buttonValue));
	}
	switch (buttonValue) {
		case "+":
		case "-":
		case "/":
		case "%":
		case "*":
			dispatch(operator(buttonValue));
			break;
		case "=":
			dispatch(equal());
			break;
		case "C":
			dispatch(clearExpression());
			break;
		case "CE":
			dispatch(clearAll());
			break;
		case "CH":
			dispatch(clearHistory());
			break;
		case "(":
			dispatch(leftBracket());
			break;
		case ")":
			dispatch(rightBracket());
			break;
		default:
	}
};

export default ButtonsClickHandler;