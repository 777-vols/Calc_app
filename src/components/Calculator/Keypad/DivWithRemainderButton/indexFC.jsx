import PropTypes from "prop-types";

import { Button, ButtonWrapper } from "./styled";

const DivWithRemainderButton = ({ clickHandler }) => {
	return (
		<ButtonWrapper>
			<Button id={"%"} onClick={() => clickHandler("%")}>%</Button>
		</ButtonWrapper>
	);
};

DivWithRemainderButton.propTypes = {
	clickHandler: PropTypes.func,
};

export default DivWithRemainderButton;