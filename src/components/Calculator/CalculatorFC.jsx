import { Container } from "../Header/styled";
import { CalculatorWrapper } from "./styled";
import Keyboard from "./Keypad/IndexFC";
import History from "./History/IndexFC";
import Screen from "./Display/IndexFC";

const CalculatorFC = () => {
	return (
		<main>
			<Container>
				<CalculatorWrapper>
					<Screen result={"12311232343.45"} />
					<Keyboard />
					<History />
				</CalculatorWrapper>
			</Container>
		</main>
	);
};

export default CalculatorFC;