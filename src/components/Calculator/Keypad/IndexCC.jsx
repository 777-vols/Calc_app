import React from "react";
import buttons from "@constants/buttonsValues";
import { connect } from "react-redux";
import ButtonsClickHandler from "@utils/ButtonsClickHandler";
import ButtonComponent from "./Button/indexCC";
import { KeypadWrapper } from "./styled";

class Keypad extends React.Component {
	buttonClick = (value) => {
		ButtonsClickHandler(this.props.dispatch, value);
	};
	buttonsList = buttons.map((el, i) => <ButtonComponent key={i} value={el} func={this.buttonClick} />);
	render() {
		return (
			<KeypadWrapper>
				{this.buttonsList}
			</KeypadWrapper>
		);
	}
}

export default connect()(Keypad);