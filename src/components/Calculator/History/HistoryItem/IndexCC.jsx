import { HistoryItemWrapper, HistoryItemResult } from "./styled";
import React from "react";

class HistoryItem extends React.Component {
	render() {
		const { result } = this.props;
		return (
			<HistoryItemWrapper>
				<HistoryItemResult>{result}</HistoryItemResult>
			</HistoryItemWrapper>
		)
	}
}

export default HistoryItem;