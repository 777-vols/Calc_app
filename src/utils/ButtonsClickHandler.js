import {
	inputValue,
	plus,
	minus,
	divide,
	multiply,
	equal,
	clearValue,
	clearAll,
	leftBracket,
	rightBracket,
	diviWithRemainde
} from "@store/slices/HomeSlice";

const ButtonsClickHandler = (dispatch, buttonValue) => {
	if (Number.isFinite(+buttonValue) || buttonValue === ".") {
		dispatch(inputValue(buttonValue));
	}
};

export default ButtonsClickHandler;