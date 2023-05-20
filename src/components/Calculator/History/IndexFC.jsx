import { useSelector } from "react-redux";

import HistoryItem from "./HistoryItem/IndexFC";
import { HistoryHeader, HistoryHeaderWrapper, HistoryResults,HistoryWrapper } from "./styled";

const History = () => {
	const historyList = useSelector(state => state.home.history);
	const history = [...historyList].reverse().map((el) => <HistoryItem key={el.id} result={el.expression} />);
	return (
		<HistoryWrapper>
			<HistoryHeaderWrapper>
				<HistoryHeader>History</HistoryHeader>
			</HistoryHeaderWrapper>
			<HistoryResults id="history">
				{history}
			</HistoryResults>
		</HistoryWrapper>
	);
};

export default History;