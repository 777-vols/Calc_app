import React from "react";
import { ButtonWrapper, Button } from "./styled";

class ButtonComponent extends React.Component {
	render() {
		const { value } = this.props;
		return (
			<ButtonWrapper>
				<Button>
					{value}
				</Button>
			</ButtonWrapper>
		);
	}
}

export default ButtonComponent;