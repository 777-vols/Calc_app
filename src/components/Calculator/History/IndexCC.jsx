import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import HistoryItem from "./HistoryItem/IndexCC";
import { HistoryHeader, HistoryHeaderWrapper, HistoryResults, HistoryWrapper } from "./styled";

class History extends React.PureComponent {
	render() {
		const { historyList } = this.props;
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
	}
}

History.propTypes = {
	historyList: PropTypes.array,
};

const mapStateToProps = (state) => ({
	historyList: state.home.history,
});

export default connect(mapStateToProps)(History);