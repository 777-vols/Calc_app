import PropTypes from "prop-types";
import React from "react";
import { ButtonWrapper, Button } from "./styled";

class DivWithRemainderButton extends React.Component {
	render() {
		const { func } = this.props;
		return (
			<ButtonWrapper>
				<Button onClick={() => func("%")}>%</Button>
			</ButtonWrapper>
		);
	}
}

DivWithRemainderButton.propTypes = {
	func: PropTypes.func,
};

export default DivWithRemainderButton;