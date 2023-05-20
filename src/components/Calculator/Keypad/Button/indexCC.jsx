import PropTypes from "prop-types";
import React from "react";

import DivWithRemainderButton from "../DivWithRemainderButton/indexCC";
import { Button,ButtonWrapper, DivButtonContainer } from "./styled";

class ButtonComponent extends React.Component {
	render() {
		const { value, func } = this.props;
		if (value === "/") {
			return (
				<ButtonWrapper>
					<DivButtonContainer>
						<Button id={value} onClick={() => func(value)}>
							{value}
						</Button>
						<DivWithRemainderButton func={func} />
					</DivButtonContainer>
				</ButtonWrapper>
			);
		};
		return (
			<ButtonWrapper>
				<Button id={value} onClick={() => func(value)}>
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