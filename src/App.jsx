import { AppWrapper } from "./styled";
import Header from "@components/Header";
import HomeCC from "@pages/Home/HomeCC";
import HomeFC from "@pages/Home/HomeFC";
import Settings from "@pages/Settings";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";



const App = () => {
	const theme = useSelector(state => state.themes.currentTheme);
	return (
		<ThemeProvider theme={theme}>
			<AppWrapper id="wrapper">
				<Header />
				<Routes>
					<Route path="/" element={<HomeFC />} />
					<Route path={"/homeCC"} element={<HomeCC />} />
					<Route path={"/settings"} element={<Settings />} />
				</Routes>
			</AppWrapper>
		</ThemeProvider>
	);
};

export default App;