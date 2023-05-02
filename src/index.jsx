import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Global } from "./GlobalStyled";


ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Global />
		<App />
	</BrowserRouter>
);


if ("development" && module && module.hot) {
	module.hot.accept();
}