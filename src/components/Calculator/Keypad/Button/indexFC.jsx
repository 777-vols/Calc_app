import { ButtonWrapper, Button } from "./styled";

const ButtonComponent = ({ value, func }) => {
	return (
		<ButtonWrapper>
			<Button onClick={() => func(value)}>
				{value}
			</Button>
		</ButtonWrapper>
	);
};

export default ButtonComponent;