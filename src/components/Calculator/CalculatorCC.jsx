import Keyboard from "../Keyboard/Index";
import History from "../History/Index";
import Screen from "../Screen/Index";
import { CalculatorWrapper } from "./styled";
import { Container } from "../Header/styled";
import React from "react";

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
		)
	}
}

export default CalculatorCC;