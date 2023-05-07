import { useDispatch } from "react-redux";
import { toggleTheme } from "@store/slices/ThemesSlice";
import { Container } from "@components/Header/styled";
import ButtonsClickHandler from "../../utils/ButtonsClickHandler";
import { SettingsWrapper, SettingsHeader, SettingsPanel, SettingsSelector, SelecorHeader, ClearButton } from "./styled";

const Settings = () => {
	const dispatch = useDispatch();
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
							<SettingsSelector id="themeSelect" onChange={toggleThemeFoo}>
								<option value="light">Light Theme</option>
								<option value="colored">Colored Theme</option>
								<option value="dark">Dark Theme</option>
							</SettingsSelector>
						</div>
						<div>
							<ClearButton onClick={clearHistory}>Clear All History</ClearButton>
						</div>
					</SettingsPanel>
				</SettingsWrapper>
			</Container>
		</main>
	);
};

export default Settings;