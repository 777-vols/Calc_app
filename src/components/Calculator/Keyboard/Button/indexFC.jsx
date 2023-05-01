import { ButtonWrapper, Button } from "./styled";

const ButtonComponent = ({ value }) => {
	return (
		<ButtonWrapper>
			<Button>
				{value}
			</Button>
		</ButtonWrapper>
	)
}

export default ButtonComponent;