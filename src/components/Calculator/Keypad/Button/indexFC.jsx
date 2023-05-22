import PropTypes from "prop-types";
import { useEffect } from "react";

import DivWithRemainderButton from "../DivWithRemainderButton/indexFC";
import { Button, ButtonWrapper, DivButtonContainer } from "./styled";

const ButtonComponent = ({ value, clickHandler }) => {
	useEffect(() => {
		const button = document.getElementById(value);
		button.addEventListener("click", (e) => {
			e.preventDefault();
			button.classList.add("animate");
			setTimeout(() => {
				button.classList.remove("animate");
			}, 200);
		}, [value]);
	});

	function onClickFunction() {
		clickHandler(value);
	}

	if (value === "/") {
		return (
			<ButtonWrapper>
				<DivButtonContainer>
					<Button id={value} onClick={onClickFunction}>
						{value}
					</Button>
					<DivWithRemainderButton clickHandler={clickHandler} />
				</DivButtonContainer>
			</ButtonWrapper >
		);
	};
	return (
		<ButtonWrapper>
			<Button id={value} onClick={onClickFunction}>
				{value}
			</Button>
		</ButtonWrapper>
	);
};

ButtonComponent.propTypes = {
	value: PropTypes.string,
	clickHandler: PropTypes.func,
};

export default ButtonComponent;