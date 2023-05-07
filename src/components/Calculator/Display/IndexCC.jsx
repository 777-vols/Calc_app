import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DisplayWrapper, Result } from "./styled";

class Display extends React.Component {
	render() {
		const { result, showingResult, expression } = this.props;
		return (
			<DisplayWrapper>
				<Result>{showingResult ? result : expression}</Result>
			</DisplayWrapper>
		);
	}
}

History.propTypes = {
	result: PropTypes.string,
	showingResult: PropTypes.bool,
	expression: PropTypes.string,
};

const mapStateToProps = (state) => ({
	result: state.home.currentResult,
	showingResult: state.home.receiver.showingResult,
	expression: state.home.historyItem,
});

export default connect(mapStateToProps)(Display);
