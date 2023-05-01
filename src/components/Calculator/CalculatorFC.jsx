import Keyboard from "./Keyboard/IndexFC";
import History from "./History/IndexFC";
import Screen from "./Screen/IndexFC";
import { CalculatorWrapper } from "./styled";
import { Container } from "../Header/styled";

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
	)
}

export default CalculatorFC;