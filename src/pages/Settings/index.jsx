import { useDispatch } from "react-redux";
import { toggleTheme } from "@store/slices/ThemesSlice";
import { Container } from "@components/Header/styled";
import { SettingsWrapper, SettingsHeader, SettingsPanel, SettingsSelector, SelecorHeader, ClearButton } from "./styled";

const Settings = () => {
	const dispatch = useDispatch();
	const toggleThemeFoo = () => {
		const select = document.getElementById("themeSelect");
		dispatch(toggleTheme({ newTheme: select.value }));
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
							<ClearButton>Clear All History</ClearButton>
						</div>
					</SettingsPanel>
				</SettingsWrapper>
			</Container>
		</main>
	);
};

export default Settings;