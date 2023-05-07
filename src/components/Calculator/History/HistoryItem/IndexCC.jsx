import React from "react";
import PropTypes from "prop-types";
import { HistoryItemWrapper, HistoryItemResult } from "./styled";

class HistoryItem extends React.Component {
	render() {
		const { result } = this.props;
		return (
			<HistoryItemWrapper>
				<HistoryItemResult>{result}</HistoryItemResult>
			</HistoryItemWrapper>
		);
	}
}

History.propTypes = {
	result: PropTypes.string,
};

export default HistoryItem;