/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Html5QrcodePlugin from "pages/ConfirmationPage/QRScannerForConf/Html5QrcodePlugin";
import scanapp from "pages/ConfirmationPage/QRScannerForConf/scanapp.svg";
import { useNavigate } from "react-router-dom";
import { participantsService } from "services";


export default function QRCheck() {
	const navigate = useNavigate();

	const onScanResult = (decodedText, decodedR) => {
		console.log(decodedText);

		participantsService.check(decodedText).then((res) => {
			// console.log(res.data);
			navigate("/detail", { state: { data: res.data } });
		});
	};

	return (
		<div className="container qr-scanner my-5 text-center d-flex componentHeight">	
			<div className="scan-space">
				<h1>Scan Pass QR to verify your details</h1>
				
				<div id="reader">
					<Html5QrcodePlugin
						fps={10}
						qrbox={250}
						disableFlip={false}
						qrCodeSuccessCallback={onScanResult}
					/>
				</div>
			</div>
		</div>
	);
}
