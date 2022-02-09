import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
// <React.StrictMode>
// </React.StrictMode>,
ReactDOM.render(
	<>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</>,
	document.getElementById("root")
);
