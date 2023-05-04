import React from "react";
import { DisplayWrapper, Result } from "./styled";

class Display extends React.Component {
	render() {
		const { result } = this.props;
		return (
			<DisplayWrapper>
				<Result>{result}</Result>
			</DisplayWrapper>
		);
	}
}

export default Display;