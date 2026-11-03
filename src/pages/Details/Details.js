/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "pages/Home/Home.css";
import FusionLogo from "pages/Home/Images/Fusion_LOGO.png";
import man from "pages/Home/Images/man.png";
import woman from "pages/Home/Images/woman.png";
import Button from "react-bootstrap/Button";
import { participantsService } from "services";

export default function Details(props) {
	const { state } = useLocation();
	const { data } = state ? state : {};
	const navigate = useNavigate();

	var msDiff = new Date("October 3, 2024").getTime() - new Date().getTime(); //Future date - current date
	var daysTill = Math.floor(msDiff / (1000 * 60 * 60 * 24));
	console.log(data);
	
	const confirmEntry = () => {
		console.log("CLICK");
		participantsService.getIn(data._id).then(res => {

			if(res.error)
			{
				console.log(res.error);
				alert("Something went wrong please try again");
				return;
			}
			
			navigate("/qrcheck");
		})
	};

	return (
		<div className="detail componentHeight">
			{data && data.collegeId ? (
				<div className="banner text-center componentHeight">
					<div className="man-woman d-flex pt-3">
						<img src={man} id="manImg" width="20%" alt="man" />
						<div className="sponsor">
							<br />
							<img
								id="sponsorLogoForDetails"
								className="mt-3"
								src={FusionLogo}
								width="100%"
								alt="Sponsor"
							/>
							<br />
							<span style={{ fontWeight: "bold", color: "#9c3c3c" }}>
								Garba & DJ Night
							</span>
						</div>
						<img id="womanImg" src={woman} width="20%" alt="woman" />
					</div>
					<div className="mt-5 mb-3">
						<h1>{data.name}</h1>
						<h4>{data.collegeId}</h4>
					</div>
					{props.user && (
						<div className="entery-button">
							<Button
								variant={data.entryStatus ? "danger" : "primary"}
								onClick={confirmEntry}
								disabled={data.entryStatus}
							>
								{data.entryStatus ? "Entry Verified	" : "Confirm Entry"}
							</Button>
						</div>
					)}

					{props.user && data.entryStatus && (
						<div className="entery-button"></div>
					)}
					<div className="event-detail d-flex justify-content-center my-5">
						<div className="event-time mr-3">
							<p>Time</p>
							<p style={{ fontSize: "13px" }}>
								1<sup>st</sup> OCT 2022
								<br />
								5:30 pm onwards
							</p>
						</div>
						<div
							className="vl"
							style={{ borderLeft: "2px solid black", height: "78px" }}
						></div>
						<div className="event-venue ml-3">
							<p>Venue</p>
							<p style={{ fontSize: "13px" }}>
								Janvi Party Plot,
								<br />
								Nr. Piplag Chowkdi, Nadiad
							</p>
						</div>
					</div>
					<div
						className="alert m-0 p-1"
						style={{
							backgroundColor: "#ecb191",
							fontWeight: "bold",
							fontSize: "large",
						}}
						role="alert"
					>
						{daysTill} DAYS TO GO!!!
					</div>
				</div>
			) : (
				<div className="banner text-center componentHeight">
					<div className="man-woman d-flex pt-3">
						<img src={man} id="manImg" width="20%" alt="man" />
						<div className="sponsor">
							<br />
							<img
								id="sponsorLogoForDetails"
								className="mt-3"
								src={FusionLogo}
								width="100%"
								alt="Sponsor"
							/>
							<br />
							<span style={{ fontWeight: "bold", color: "#9c3c3c" }}>
								Garba & DJ Night
							</span>
						</div>
						<img id="womanImg" src={woman} width="20%" alt="woman" />
					</div>
					<div className="my-5">
						<span style={{ fontWeight: "bold", color: "#ac1c1c" }}>
							This Pass is not allocated to anyone.
						</span>{" "}
						<br />
						If you have collected this pass from <br /> our member then contact
						us. <br />
						<p></p>
						Darshan Parmar <a href="tel:8469108864">+91 8469108864</a> <br />
						Yash Miyatra <a href="tel:8000488809">+91 8000488809</a>
					</div>
					<div className="event-detail d-flex justify-content-center mb-4">
						<div className="event-time mr-3">
							<p>Time</p>
							<p style={{ fontSize: "13px" }}>
								1<sup>st</sup> OCT 2022
								<br />
								5:30 pm onwards
							</p>
						</div>
						<div
							className="vl"
							style={{ borderLeft: "2px solid black", height: "78px" }}
						></div>
						<div className="event-venue ml-3">
							<p>Venue</p>
							<p style={{ fontSize: "13px" }}>
								Janvi Party Plot,
								<br />
								Nr. Piplag Chowkdi, Nadiad
							</p>
						</div>
					</div>
					<div
						className="alert m-0 p-1"
						style={{
							backgroundColor: "#ecb191",
							fontWeight: "bold",
							fontSize: "large",
						}}
						role="alert"
					>
						{daysTill} DAYS TO GO!!!
					</div>
				</div>
			)}
		</div>
	);
}
