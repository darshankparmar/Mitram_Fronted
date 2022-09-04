/** @format */

import React from "react";
import "./About.css";
import QRCode from "react-qr-code";

export default function About() {


	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<h3 className="animate-charcter"> MITRAM</h3>
				</div>
			</div>
			<QRCode value="Mitram" />
		</div>
	);
}
