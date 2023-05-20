import React from "react";

import {
ControlPanelButton,
ControlPanelHeader, 	ControlPanelWrapper, HeaderContainer} from "./styled";

class ControlPanel extends React.Component {
	render() {
		const toggleHistory = () => {
			const history = document.getElementById("history");
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