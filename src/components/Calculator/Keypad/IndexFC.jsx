import buttons from "@constants/buttonsValues";
import { useDispatch } from "react-redux";
import ButtonsClickHandler from "@utils/ButtonsClickHandler";
import ButtonComponent from "./Button/indexFC";
import { KeypadWrapper } from "./styled";

const Keypad = () => {
	const dispatch = useDispatch();
	function buttonClick(value) {
		ButtonsClickHandler(dispatch, value);
	}
	const buttonsList = buttons.map((el, i) => <ButtonComponent key={i} value={el} func={buttonClick} />);

	return (
		<KeypadWrapper>
			{buttonsList}
		</KeypadWrapper>
	);
};

export default Keypad;