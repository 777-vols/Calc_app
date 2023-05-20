import { Container } from "@components/Header/styled";
import ButtonsClickHandler from "@helpers/ButtonsClickHandler";
import { toggleTheme } from "@store/slices/ThemesSlice";
import { useDispatch, useSelector } from "react-redux";

import { ClearButton, SelecorHeader, SettingsHeader, SettingsPanel, SettingsSelector, SettingsWrapper } from "./styled";

const Settings = () => {
	const dispatch = useDispatch();
	const theme = useSelector(state => state.themes.themeName);
	const toggleThemeFoo = () => {
		const select = document.getElementById("themeSelect");
		dispatch(toggleTheme({ newTheme: select.value }));
	};
	const clearHistory = () => {
		ButtonsClickHandler(dispatch, "CH");
	};

	return (
		<main>
			<Container>
				<SettingsWrapper>
					<SettingsHeader>Settings</SettingsHeader>
					<SettingsPanel>
						<SelecorHeader> Switch Theme</SelecorHeader>
						<div>
							<SettingsSelector value={theme} id="themeSelect" onChange={toggleThemeFoo}>
								<option value="light">Light Theme</option>
								<option value="colored">Colored Theme</option>
								<option value="dark">Dark Theme</option>
							</SettingsSelector>
						</div>
						<div>
							<ClearButton id="CH" onClick={clearHistory}>Clear All History</ClearButton>
						</div>
					</SettingsPanel>
				</SettingsWrapper>
			</Container>
		</main>
	);
};

export default Settings;