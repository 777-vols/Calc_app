import React from "react";
import { ScreenWrapper, Result } from "./styled";

class Screen extends React.Component {
	render() {
		const { result } = this.props;
		return (
			<ScreenWrapper>
				<Result>{result}</Result>
			</ScreenWrapper>
		);
	}
}

export default Screen;