import PropTypes from "prop-types";
import React from "react";

import { Button, ButtonWrapper } from "./styled";

class DivWithRemainderButton extends React.Component {
	render() {
		const { clickHandler } = this.props;
		return (
			<ButtonWrapper>
				<Button id={"%"} onClick={() => clickHandler("%")}>%</Button>
			</ButtonWrapper>
		);
	}
}

DivWithRemainderButton.propTypes = {
	clickHandler: PropTypes.func,
};

export default DivWithRemainderButton;