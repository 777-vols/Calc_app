import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { Global } from "./GlobalStyled";
import ErrorBoundary from "./components/ErrorBoundary/Index";

const theme = {
	colors: {
		light: {
			background: "white",
			color: "black",
			buttonBackground: "#f1f0f0"
		},
		dark: {
			background: "rgb(77 77 77)",
			color: "#f1f1f1",
			buttonBackground: "rgb(123 123 123)"
		},
		colored: {
			background: "rgb(174 140 191)",
			color: "rgb(46 0 67)",
			buttonBackground: "#d8bde5"
		}
	}
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<ErrorBoundary>
		<ThemeProvider theme={theme.colors.light}>
			<BrowserRouter>
				<Global />
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</ErrorBoundary>
);


if ("development" && module && module.hot) {
	module.hot.accept();
}