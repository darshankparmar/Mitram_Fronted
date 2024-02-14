/** @format */

import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import "./checkout.css";

export default function CheckoutCash() {
	const { state } = useLocation();
	const { data } = state ? state : {};
	console.log(data);

	const componentRef = useRef();
	const printSuccessReciept = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div className="cash-reciept componentHeight">
			<Container
				className="tra-success-box my-5 card p-3"
				id="tra-success-box"
				ref={componentRef}
			>
				<div className="notify-successbox d-flex">
					<h1 className="success-msg">Registration Successful!</h1>
					<span className="alerticon mx-2">
						<i className="fa-solid fa-circle-check"></i>
					</span>
					<br />
				</div>
				<div className="qr-code text-center">
					<QRCode value={data.client_txn_id} size={150} />
				</div>
				<hr />
				<div className="text-center">
					<p
						style={{
							margin: 0,
							fontSize: "14px",
							textAlign: "center",
							msoLineHeightAlt: "16.8px",
						}}
					>
						<span style={{ fontSize: "17px", color: "#fb0808" }}>
							<strong>Physical Pass and ID card required for entry.</strong>
						</span>
					</p>
					<hr />
					<h3 style={{ margin: 0, marginBottom: "6px" }}>
						Please Collect Your Passes From
					</h3>
					<p style={{ margin: 0, marginBottom: "6px" }}>
						Ronak Dattani : +91 8849410031
					</p>
					<p style={{ margin: 0, marginBottom: "6px" }}>
						Hiren Chavda : +91 7016801492
					</p>
					<p style={{ margin: 0, marginBottom: "6px" }}>
						Darshan Parmar: +91 8469108864
					</p>
					<p style={{ margin: 0, marginBottom: "6px" }}>
						Time : 12.40 pm / 3.30 pm / 5.30 pm
					</p>
					<p style={{ margin: 0, marginBottom: "6px" }}>Place : CF DDU</p>
					<p style={{ margin: 0, marginBottom: "6px", fontWeight: "bold" }}>
						Carry your college id and screenshot of this reciept with you
					</p>
					<hr />
					<p style={{ margin: 0, marginBottom: "6px", fontWeight: "bold" }}>
						Note: Please make payment and Collect your pass within 2 days
						otherwise your registration will be cancelled.
					</p>
				</div>
				<hr />
				<p style={{ margin: 0, marginBottom: "6px" }}>
					Stay connected with us on our official instagram handle for updates
				</p>
				<br />
				<p className="text-center">
					<a
						href="https://www.instagram.com/mitramgroup/"
						target="_blank"
						className="insta-link"
					>
						@mitramgroup
					</a>
				</p>
				<hr />
				<Row className="tran-table-row my-2">
					<Col className="tran-table-col-1">Payee Name</Col>
					<Col>{data.name}</Col>
				</Row>
				<Row className="tran-table-row my-2">
					<Col className="tran-table-col-1">Email</Col>
					<Col>{data.email}</Col>
				</Row>
				<Row className="tran-table-row my-2">
					<Col className="tran-table-col-1">Amount</Col>
					<Col>{data.amount}</Col>
				</Row>
				<Row className="tran-table-row my-2">
					<Col className="tran-table-col-1">client_txn_id</Col>
					<Col>{data.client_txn_id}</Col>
				</Row>
				<hr />
				<small className="mx-auto mb-2 text-danger">
					take screenshot or print of page
					<br />
					if you did not recieve mail then check your spam folder.
				</small>
				<div className="tran-table-buttons text-center">
					<Button
						variant="primary"
						className="mx-2"
						onClick={printSuccessReciept}
					>
						Print
					</Button>
					<Button variant="primary" className="mx-2">
						<Link to="/" className="text-white m-0">
							Home
						</Link>
					</Button>
				</div>
			</Container>
		</div>
	);
}
