import PropTypes from "prop-types";
import { ButtonWrapper, Button } from "./styled";

const DivWithRemainderButton = ({ func }) => {
	return (
		<ButtonWrapper>
			<Button onClick={() => func("%")}>%</Button>
		</ButtonWrapper>
	);
};

DivWithRemainderButton.propTypes = {
	func: PropTypes.func,
};

export default DivWithRemainderButton;