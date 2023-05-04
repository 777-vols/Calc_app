import React from "react";
import { Container } from "@components/Header/styled";
import Keypad from "@components/Calculator/Keypad/IndexFC";
import History from "@components/Calculator/History/IndexFC";
import Display from "@components/Calculator/Display/IndexFC";
import { CalculatorWrapper } from "./styled";

class HomeCC extends React.Component {
	render() {
		return (
			<main>
				<Container>
					<CalculatorWrapper>
						<Display result={"12311232343.45"} />
						<Keypad />
						<History />
					</CalculatorWrapper>
				</Container>
			</main >
		);
	}
}

export default HomeCC;