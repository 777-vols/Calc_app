import { Route, Routes } from "react-router-dom";
import { AppWrapper } from "./styled";
import Header from "@components/Header";
import Settings from "@pages/Settings";
import HomeCC from "@pages/Home/HomeCC";
import HomeFC from "@pages/Home/HomeFC";

const App = () => {
	return (
		<AppWrapper>
			<Header />
			<Routes>
				<Route path="/" element={<HomeFC />} />
				<Route path={"/homeCC"} element={<HomeCC />} />
				<Route path={"/settings"} element={<Settings />} />
			</Routes>
		</AppWrapper>
	);
};

export default App;