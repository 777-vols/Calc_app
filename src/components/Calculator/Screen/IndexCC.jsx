import { ScreenWrapper, Result } from "./styled";
import React from "react";

class Screen extends React.Component {
	render() {
		const { result } = this.props;
		return (
			<ScreenWrapper>
				<Result>{result}</Result>
			</ScreenWrapper>
		)
	}
}

export default Screen;