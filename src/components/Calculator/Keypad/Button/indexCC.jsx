import PropTypes from "prop-types";
import React from "react";

import DivWithRemainderButton from "../DivWithRemainderButton/indexCC";
import { Button, ButtonWrapper, DivButtonContainer } from "./styled";

class ButtonComponent extends React.Component {
	constructor(props) {
		super(props);
		this.value = props.value;
		this.clickHandler = props.clickHandler;
	}
	componentDidMount() {
		const button = document.getElementById(this.value);
		button.addEventListener("click", (e) => {
			e.preventDefault();
			button.classList.add("animate");
			setTimeout(() => {
				button.classList.remove("animate");
			}, 200);
		});
	}
	componentDidUpdate() {
		const button = document.getElementById(this.value);
		button.addEventListener("click", (e) => {
			e.preventDefault();
			button.classList.add("animate");
			setTimeout(() => {
				button.classList.remove("animate");
			}, 200);
		});
	}

	render() {
		if (this.value === "/") {
			return (
				<ButtonWrapper>
					<DivButtonContainer>
						<Button id={this.value} onClick={() => this.clickHandler(this.value)}>
							{this.value}
						</Button>
						<DivWithRemainderButton clickHandler={this.clickHandler} />
					</DivButtonContainer>
				</ButtonWrapper>
			);
		};
		return (
			<ButtonWrapper>
				<Button id={this.value} onClick={() => this.clickHandler(this.value)}>
					{this.value}
				</Button>
			</ButtonWrapper>
		);
	}
}

ButtonComponent.propTypes = {
	value: PropTypes.string,
	clickHandler: PropTypes.func,
};

export default ButtonComponent;