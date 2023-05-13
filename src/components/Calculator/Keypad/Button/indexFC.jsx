import PropTypes from "prop-types";
import DivWithRemainderButton from "../DivWithRemainderButton/indexFC";
import { ButtonWrapper, DivButtonContainer, Button } from "./styled";

const ButtonComponent = ({ value, func }) => {
	if (value === "/") {
		return (
			<ButtonWrapper>
				<DivButtonContainer>
					<Button onClick={() => func(value)}>
						{value}
					</Button>
					<DivWithRemainderButton func={func} />
				</DivButtonContainer>
			</ButtonWrapper>
		);
	};
	return (
		<ButtonWrapper>
			<Button onClick={() => func(value)}>
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