import PropTypes from "prop-types";

import { Button, ButtonWrapper } from "./styled";

const DivWithRemainderButton = ({ clickHandler }) => {
	function onClickFunction() {
		clickHandler("%");
	}
	return (
		<ButtonWrapper>
			<Button id={"%"} onClick={onClickFunction}>%</Button>
		</ButtonWrapper>
	);
};

DivWithRemainderButton.propTypes = {
	clickHandler: PropTypes.func,
};

export default DivWithRemainderButton;