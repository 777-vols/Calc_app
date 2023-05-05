import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store/index";
import App from "./App";
import { Global } from "./GlobalStyled";
import ErrorBoundary from "./components/ErrorBoundary/Index";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ErrorBoundary>
		<BrowserRouter>
			<Global />
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</ErrorBoundary>
);


if ("development" && module && module.hot) {
	module.hot.accept();
}