import { HistoryItemWrapper, HistoryItemResult } from "./styled";

const HistoryItem = ({ result }) => {
	return (
		<HistoryItemWrapper>
			<HistoryItemResult>{result}</HistoryItemResult>
		</HistoryItemWrapper>
	);
};

export default HistoryItem;