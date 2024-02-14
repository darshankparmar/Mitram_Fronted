/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { authHeader } from "helpers";

// axios.defaults.baseURL =
	// "https://f4vrqp8x71.execute-api.ap-south-1.amazonaws.com/Dev";
// axios.defaults.baseURL =
// 	"http://ec2-13-235-93-86.ap-south-1.compute.amazonaws.com:8080/";
axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers = authHeader();

axios.interceptors.response.use((response) => {
	//console.log("Response:", JSON.stringify(response, null, 2));
	return response;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
