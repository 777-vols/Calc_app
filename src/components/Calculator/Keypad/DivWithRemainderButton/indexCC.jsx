import PropTypes from "prop-types";
import React from "react";

import { Button, ButtonWrapper } from "./styled";

class DivWithRemainderButton extends React.Component {
	constructor(props) {
		super(props);
		this.clickHandler = props.clickHandler;
	}
	onClickFunction = () => {
		this.clickHandler("%");
	};
	render() {
		return (
			<ButtonWrapper>
				<Button id={"%"} onClick={this.onClickFunction}>%</Button>
			</ButtonWrapper>
		);
	}
}

DivWithRemainderButton.propTypes = {
	clickHandler: PropTypes.func,
};

export default DivWithRemainderButton;