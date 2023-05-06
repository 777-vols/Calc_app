import PropTypes from "prop-types";
import { ButtonWrapper, Button } from "./styled";

const ButtonComponent = ({ value, func }) => {
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