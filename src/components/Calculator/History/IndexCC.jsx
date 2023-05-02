import React from "react";
import { HistoryWrapper, HistoryHeaderWrapper, HistoryHeader, HistoryResults } from "./styled";
import HistoryItem from "./HistoryItem/IndexCC";

class History extends React.Component {
	render() {
		return (
			<HistoryWrapper>
				<HistoryHeaderWrapper>
					<HistoryHeader>History</HistoryHeader>
				</HistoryHeaderWrapper>
				<HistoryResults>
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
					<HistoryItem result={"10 * 2 / 4 = 5"} />
				</HistoryResults>
			</HistoryWrapper>
		);
	}
}

export default History;