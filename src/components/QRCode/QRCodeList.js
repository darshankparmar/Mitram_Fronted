/** @format */

import React, { useState } from "react";
import scanapp from "./scanapp.svg";
import { useNavigate } from "react-router-dom";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import "./QRCode.css";

export default function QRCodeList() {
	const [decodedResult, setDecodedResult] = useState(null);
	const navigate = useNavigate();

	const onNewScanResult = (decodedText, decodedR) => {
		// console.log(decodedText);
		// console.log(decodedR);

		var decodedResult_Temp = decodedText;
		setDecodedResult(decodedResult_Temp);
		navigate("/confirmation", { state: { data: decodedText } });
	};

	return (
		<div className="container qr-scanner my-5 text-center d-flex componentHeight">
			<div className="scan-space">
				<h1>For Confirmation</h1>
				<div id="logo">
					<img src={scanapp} alt="logo" />
				</div>
				<div id="reader">
					<Html5QrcodePlugin
						fps={10}
						qrbox={250}
						disableFlip={false}
						qrCodeSuccessCallback={onNewScanResult}
					/>
					<h1>{decodedResult}</h1>
				</div>
			</div>
		</div>
	);
}
