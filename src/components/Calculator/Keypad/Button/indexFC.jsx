import PropTypes from "prop-types";

import DivWithRemainderButton from "../DivWithRemainderButton/indexFC";
import { Button,ButtonWrapper, DivButtonContainer } from "./styled";

const ButtonComponent = ({ value, func }) => {
	if (value === "/") {
		return (
			<ButtonWrapper>
				<DivButtonContainer>
					<Button id={value} onClick={() => func(value)}>
						{value}
					</Button>
					<DivWithRemainderButton func={func} />
				</DivButtonContainer>
			</ButtonWrapper >
		);
	};
	return (
		<ButtonWrapper>
			<Button id={value} onClick={() => func(value)}>
				{value}
			</Button>
		</ButtonWrapper>
	);
};

ButtonComponent.propTypes = {
	value: PropTypes.string,
	func: PropTypes.func,
};

export default ButtonComponent;