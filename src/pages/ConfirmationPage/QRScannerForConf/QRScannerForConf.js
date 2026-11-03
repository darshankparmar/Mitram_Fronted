/** @format */

import React, { useState,useEffect	 } from "react";
import scanapp from "./scanapp.svg";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { participantsService } from "services";


export default function QRScannerForConf() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const { collegeId, data } = state ? state : {};
	const [isScanned, setIsScanned] = useState(false);
	const [QRCode, setQRCode] = useState("");
	// console.log(collegeId);
	// console.log(data);
	useEffect(() => {

		const getIt = async () => {
			if (isScanned && QRCode !== "")
				await participantsService.assignQR(collegeId, QRCode).then((res) => {
					console.log(res);
					if (res.data.err) alert(res.data.err);
					else {
						alert("Successfully Assigned.");
						navigate("/confirmation", { state: { data: data } });
					}
				});
		};
		getIt();
	// eslint-disable-next-line react-hooks/exhaustive-deps -- only re-run when a new QR code is scanned
	}, [isScanned,QRCode]);
	const onNewScanResult = async (decodedText, decodedR) => {

			setIsScanned(true);
			setQRCode(decodedText);
	};

	return (
		<>
			<div>
				<h1 className="my-2 mx-auto text-center"> College Id : {collegeId} </h1>
			</div>
			<div className="container qr-scanner my-5 text-center d-flex componentHeight">
				<div className="scan-space">
					<div id="logo">
						<img src={scanapp} alt="logo" />
					</div>
					<div id="reader">
						<Html5QrcodePlugin
							fps={10}
							qrbox={250}
							disableFlip={false}
							disable
							qrCodeSuccessCallback={onNewScanResult}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
