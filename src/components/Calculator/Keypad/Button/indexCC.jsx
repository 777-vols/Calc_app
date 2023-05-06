import PropTypes from "prop-types";
import React from "react";
import { ButtonWrapper, Button } from "./styled";

class ButtonComponent extends React.Component {
	render() {
		const { value, func } = this.props;
		return (
			<ButtonWrapper>
				<Button onClick={() => func(value)}>
					{value}
				</Button>
			</ButtonWrapper>
		);
	}
}

ButtonComponent.propTypes = {
	value: PropTypes.string,
	func: PropTypes.func,
};

export default ButtonComponent;