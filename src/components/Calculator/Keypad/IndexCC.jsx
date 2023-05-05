import React from "react";
import buttons from "@constants/buttonsValues";
import ButtonComponent from "./Button/indexCC";
import { KeypadWrapper } from "./styled";

class Keypad extends React.Component {
	render() {
		const buttonsList = buttons.map((el, i) => <ButtonComponent key={i} value={el} />);
		return (
			<KeypadWrapper>
				{buttonsList}
			</KeypadWrapper>
		);
	}
}

export default Keypad;