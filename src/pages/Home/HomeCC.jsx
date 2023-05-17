import React from "react";
import { Container } from "@components/Header/styled";
import Keypad from "@components/Calculator/Keypad/IndexCC";
import History from "@components/Calculator/History/IndexCC";
import Display from "@components/Calculator/Display/IndexCC";
import ControlPanel from "@components/Calculator/ControlPanel/IndexCC";
import { CalculatorWrapper } from "./styled";

class HomeCC extends React.Component {
	render() {
		return (
			<main>
				<Container>
					<CalculatorWrapper>
						<Display result={"12311232343.45"} />
						<Keypad />
						<ControlPanel />
						<History />
					</CalculatorWrapper>
				</Container>
			</main >
		);
	}
}

export default HomeCC;