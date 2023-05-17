import React from "react";
import { Container } from "@components/Header/styled";
import Keypad from "@components/Calculator/Keypad/IndexFC";
import History from "@components/Calculator/History/IndexFC";
import Display from "@components/Calculator/Display/IndexFC";
import ControlPanel from "@components/Calculator/ControlPanel/IndexFC";
import { CalculatorWrapper } from "./styled";

const HomeFC = () => {
	return (
		<main>
			<Container>
				<CalculatorWrapper>
					<Display />
					<Keypad />
					<ControlPanel />
					<History />
				</CalculatorWrapper>
			</Container>
		</main>
	);
};

export default HomeFC;