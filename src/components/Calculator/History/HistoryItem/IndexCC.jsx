import React from "react";
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

export default HistoryItem;