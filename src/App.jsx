import { Route, Routes } from "react-router-dom";
import { AppWrapper } from "./styled";
import Header from "@components/Header";
import CalculatorCC from "@components/Calculator/CalculatorCC";
import CalculatorFC from "@components/Calculator/CalculatorFC";
import Settings from "@pages/Settings";

const App = () => {
	return (
		<AppWrapper>
			<Header />
			<Routes>
				<Route path="/" element={<CalculatorFC />} />
				<Route path={"/homeCC"} element={<CalculatorCC />} />
				<Route path={"/settings"} element={<Settings />} />
			</Routes>
		</AppWrapper>
	);
};

export default App;