import React from "react";
import { connect } from "react-redux";
import { DisplayWrapper, Result } from "./styled";

class Display extends React.Component {
	render() {
		const { result, showingResult, currentValue } = this.props;
		return (
			<DisplayWrapper>
				<Result>{showingResult ? result : currentValue}</Result>
			</DisplayWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	result: state.home.currentValue,
	showingResult: state.home.receiver.showingResult,
	currentValue: state.home.currentValue,
});
export default connect(mapStateToProps)(Display);
