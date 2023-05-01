import { ButtonWrapper, Button } from "./styled";
import React from "react";

class ButtonComponent extends React.Component {
	render() {
		const { value } = this.props;
		return (
			<ButtonWrapper>
				<Button>
					{value}
				</Button>
			</ButtonWrapper>
		)
	}
}

export default ButtonComponent;