import store from "@store/index";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary/Index";
import { Global } from "./GlobalStyled";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ErrorBoundary>
		<HashRouter>
			<Global />
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	</ErrorBoundary>
);


if ("development" && module && module.hot) {
	module.hot.accept();
}
