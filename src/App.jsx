import Header from "@components/Header";
import * as urls from "@constants/urls";
import HomeCC from "@pages/Home/HomeCC";
import HomeFC from "@pages/Home/HomeFC";
import Settings from "@pages/Settings";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AppWrapper } from "./styled";

const App = () => {
	const theme = useSelector(state => state.themes.currentTheme);
	return (
		<ThemeProvider theme={theme}>
			<AppWrapper id="wrapper">
				<Header />
				<Routes>
					<Route path={urls.homeFC} element={<HomeFC />} />
					<Route path={urls.homeCC} element={<HomeCC />} />
					<Route path={urls.settings} element={<Settings />} />
				</Routes>
			</AppWrapper>
		</ThemeProvider>
	);
};

export default App;