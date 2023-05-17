import { useSelector } from "react-redux";
import { HistoryWrapper, HistoryHeaderWrapper, HistoryHeader, HistoryResults } from "./styled";
import HistoryItem from "./HistoryItem/IndexFC";

const History = () => {
	const historyList = useSelector(state => state.home.history);
	const history = [...historyList].reverse().map((el) => <HistoryItem key={el.id} result={el.expression} />);
	return (
		<HistoryWrapper id="historyBlock">
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