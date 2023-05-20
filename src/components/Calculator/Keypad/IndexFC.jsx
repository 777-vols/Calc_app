import buttons from "@constants/buttonsValues";
import ButtonsClickHandler from "@helpers/ButtonsClickHandler";
import { useDispatch } from "react-redux";

import ButtonComponent from "./Button/indexFC";
import { KeypadWrapper } from "./styled";

const Keypad = () => {
	const dispatch = useDispatch();
	const buttonClick = (value) => {
		ButtonsClickHandler(dispatch, value);
	};
	const buttonsList = buttons.map((el, i) =>
		<ButtonComponent key={i} value={el} func={buttonClick} />);

	return (
		<KeypadWrapper>
			{buttonsList}
		</KeypadWrapper>
	);
};

export default Keypad;