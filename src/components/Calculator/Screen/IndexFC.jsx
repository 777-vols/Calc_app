import { ScreenWrapper, Result } from "./styled";

const Screen = ({ result }) => {
	return (
		<ScreenWrapper>
			<Result>{result}</Result>
		</ScreenWrapper>
	)
}

export default Screen;