import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => ({
	result: state.home.currentValue,
});
export default connect(mapStateToProps)(Display);
