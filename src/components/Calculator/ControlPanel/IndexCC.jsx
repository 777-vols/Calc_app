import React from "react";
import {
	ControlPanelWrapper, HeaderContainer, ControlPanelHeader, ControlPanelButton
} from "./styled";

class ControlPanel extends React.Component {
	render() {
		const toggleHistory = () => {
			const history = document.getElementById("historyBlock");
			history.style.display = history.style.display === "none" ? null : "none";
		};

		return (
			<ControlPanelWrapper>
				<HeaderContainer>
					<ControlPanelHeader>Control Panel</ControlPanelHeader>
				</HeaderContainer>
				<ControlPanelButton onClick={toggleHistory}>show/hide History</ControlPanelButton>
			</ControlPanelWrapper>
		);
	}
};

export default ControlPanel;