import ErrorButton from "../../ErrorButton/Index";
import { HistoryWrapper, HistoryHeaderWrapper, HistoryHeader, HistoryResults } from "./styled";
import HistoryItem from "./HistoryItem/IndexFC";

const History = () => {
	return (
		<HistoryWrapper>
			<HistoryHeaderWrapper>
				<HistoryHeader>History</HistoryHeader>
			</HistoryHeaderWrapper>
			<HistoryResults>
				<ErrorButton />
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
};

export default History;