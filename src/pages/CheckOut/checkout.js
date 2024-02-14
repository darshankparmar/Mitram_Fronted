/** @format */

import { useEffect, useState, useRef } from "react";

import { useSearchParams } from "react-router-dom";
import { participantsService } from "services";
import "./checkout.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

function formatDate(date, format) {
	const map = {
		mm:
			date.getMonth() >= 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1),
		dd: date.getDate() >= 10 ? date.getDate() : "0" + date.getDate().toString(),
		yy: date.getFullYear().toString().slice(-2),
		yyyy: date.getFullYear(),
	};
	// console.log(format.replace(/dd|mm|yyyy/gi, (matched) => map[matched]));
	return format.replace(/dd|mm|yyyy/gi, (matched) => map[matched]);
}

function CheckOut() {
	const [serachParams, set_search_params] = useSearchParams();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});
	useEffect(() => {
		const loadData = async () => {
			setIsLoading(true);
			try {

				let response = participantsService.payCheck(
					serachParams.get("client_txn_id"),
				);
				let data = (await response).data;
				console.log(data);
				if(data.wait)
					loadData();
				else 
					setData(data);
			} catch (e) {
				console.log(e);
			} finally {
				setIsLoading(false);
			}
		};
		loadData();
	}, []);

	const componentRef = useRef();
	const printSuccessReciept = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div className="reciept componentHeight">
			{isLoading && <p>Loading...</p>}
			{!isLoading && data.status === false && (
				<div class="container-404-page">
					<h1>404</h1>
					<h2>Page Not Found</h2>
					<p>
						The Page you are looking for doesn't exist or an other error
						occured. Go to{" "}
						<Link to="/" className="m-0">
							Home
						</Link>
					</p>
				</div>
			)}
			{!isLoading &&
				data &&
				data.msg === "Transaction found" &&
				!data.data.upi_txn_id && (
					<Container className="tra-fail-box my-5 card p-3" ref={componentRef}>
						<div className="notify-failbox d-flex">
							<h1 className="success-msg">Transaction Failed</h1>
							<span className="alerticon mx-2">
								<i class="fa-solid fa-circle-exclamation"></i>
							</span>
							<br />
						</div>
						<small>
							The transaction failed due to a technical error. <br />
							If your money was debited, you should get refund within the next 7
							days.
						</small>
						<div className="qr-code text-center">
							<QRCode value={data.data.client_txn_id} size={150} />
						</div>
						<hr />
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">Name</Col>
							<Col>{data.data.customer_name}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">Email</Col>
							<Col>{data.data.customer_email}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">Amount</Col>
							<Col>{data.data.amount}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">client_txn_id</Col>
							<Col>{data.data.client_txn_id}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">Date</Col>
							<Col>
								{new Intl.DateTimeFormat("en-US", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
								}).format(new Date(data.data.createdAt))}
							</Col>
						</Row>
						<hr />
						<small className="mx-auto mb-2 text-danger">
							take screenshot of page
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
				)}
			{!isLoading &&
				data &&
				data.msg === "Transaction found" &&
				data.data.upi_txn_id && (
					<Container
						className="tra-success-box my-5 card p-3"
						id="tra-success-box"
						ref={componentRef}
					>
						<div className="notify-successbox d-flex">
							<h1 className="success-msg">Transaction Successful!</h1>
							<span className="alerticon mx-2">
								<i className="fa-solid fa-circle-check"></i>
							</span>
							<br />
						</div>
						<div className="qr-code text-center">
							<QRCode value={data.data.client_txn_id} size={150} />
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
						</div>
						<hr />
						<p style={{ margin: 0, marginBottom: "6px" }}>
							Stay connected with us on our official instagram handle for
							updates
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
							<Col>{data.data.customer_name}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">Email</Col>
							<Col>{data.data.customer_email}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">Amount</Col>
							<Col>{data.data.amount}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">client_txn_id</Col>
							<Col>{data.data.client_txn_id}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">upi_txn_id</Col>
							<Col>{data.data.upi_txn_id}</Col>
						</Row>
						<Row className="tran-table-row my-2">
							<Col className="tran-table-col-1">Date</Col>
							<Col>
								{new Intl.DateTimeFormat("en-US", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
								}).format(new Date(data.data.createdAt))}
							</Col>
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
				)}
		</div>
	);
}

export default CheckOut;
