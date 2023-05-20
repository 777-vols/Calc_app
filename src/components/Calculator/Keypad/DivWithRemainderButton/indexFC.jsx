import PropTypes from "prop-types";

import { Button,ButtonWrapper } from "./styled";

const DivWithRemainderButton = ({ func }) => {
	return (
		<ButtonWrapper>
			<Button id={"%"} onClick={() => func("%")}>%</Button>
		</ButtonWrapper>
	);
};

DivWithRemainderButton.propTypes = {
	func: PropTypes.func,
};

export default DivWithRemainderButton;