import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { DisplayWrapper, ExprContainer, Expression, Value } from "./styled";

class Display extends React.Component {
	render() {
		const { result, showingResult, historyItem, polishArray, oldValue, oldExpression, currentValue } = this.props;
		return (
			<DisplayWrapper>
				<ExprContainer>
					<Expression id="expression">{showingResult ? oldExpression :
						currentValue ? polishArray : historyItem}</Expression>
				</ExprContainer>
				<ExprContainer>
					<Value id="result">{showingResult ? result : currentValue ? currentValue : oldValue}</Value>
				</ExprContainer>
			</DisplayWrapper>
		);
	}
}

History.propTypes = {
	showingResult: PropTypes.bool,
	historyItem: PropTypes.string,
	polishArray: PropTypes.array,
	oldExpression: PropTypes.string,
	oldValue: PropTypes.string,
	currentValue: PropTypes.string,
	result: PropTypes.string,
};

const mapStateToProps = (state) => ({
	showingResult: state.home.showingResult,
	historyItem: state.home.historyItem,
	polishArray: state.home.receiver.getPolishArray(),
	oldExpression: state.home.oldExpression,
	oldValue: state.home.oldValue,
	currentValue: state.home.currentValue,
	result: state.home.expressionResult,
});

export default connect(mapStateToProps)(Display);
