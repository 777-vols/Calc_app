import {
	inputValue,
	plus,
	minus,
	divide,
	multiply,
	equal,
	clearExpression,
	clearAll,
	clearHistory,
	leftBracket,
	rightBracket,
	divWithRemainder
} from "@store/slices/HomeSlice";

const ButtonsClickHandler = (dispatch, buttonValue) => {
	if (Number.isFinite(+buttonValue) || buttonValue === ".") {
		dispatch(inputValue(buttonValue));
	}
	if (buttonValue === "+") {
		dispatch(plus());
	}
	if (buttonValue === "-") {
		dispatch(minus());
	}
	if (buttonValue === "/") {
		dispatch(divide());
	}
	if (buttonValue === "*") {
		dispatch(multiply());
	}
	if (buttonValue === "=") {
		dispatch(equal());
	}
	if (buttonValue === "C") {
		dispatch(clearExpression());
	}
	if (buttonValue === "CE") {
		dispatch(clearAll());
	}
	if (buttonValue === "CH") {
		dispatch(clearHistory());
	}
	if (buttonValue === "(") {
		dispatch(leftBracket());
	}
	if (buttonValue === ")") {
		dispatch(rightBracket());
	}
	if (buttonValue === "%") {
		dispatch(divWithRemainder());
	}
};

export default ButtonsClickHandler;