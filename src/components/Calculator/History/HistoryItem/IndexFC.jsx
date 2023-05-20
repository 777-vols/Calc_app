import PropTypes from "prop-types";

import { HistoryItemResult, HistoryItemWrapper } from "./styled";

const HistoryItem = ({ result }) => {
	return (
		<HistoryItemWrapper>
			<HistoryItemResult>{result}</HistoryItemResult>
		</HistoryItemWrapper>
	);
};

History.propTypes = {
	result: PropTypes.string,
};

export default HistoryItem;