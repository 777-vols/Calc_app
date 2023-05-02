import React from "react";
import { Container } from "../Header/styled";
import Keyboard from "./Keyboard/IndexCC";
import History from "./History/IndexCC";
import Screen from "./Screen/IndexCC";
import { CalculatorWrapper } from "./styled";

class CalculatorCC extends React.Component {
	render() {
		return (
			<main>
				<Container>
					<CalculatorWrapper>
						<Screen result={"12311232343.45"} />
						<Keyboard />
						<History />
					</CalculatorWrapper>
				</Container>
			</main >
		);
	}
}

export default CalculatorCC;