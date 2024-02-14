/** @format */

import React from "react";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fusion2k19 from "./Images/Fusion2k19.jpg";
import Antrixx2k19 from "./Images/Antrixx2k19.jpg";
import Fusion2k21 from "./Images/Fusion2k21.png";
import "./Home.css";
import sponsorLogo from "./Images/LOTUS.png";
import FusionLogo from "./Images/Fusion_LOGO.png";
import man from "./Images/man.png";
import woman from "./Images/woman.png";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
	return (
		<div className="home-page componentHeight">
			<div className="banner text-center pb-5">
				<div className="man-woman d-flex pt-3">
					<img src={man} id="manImg" width="20%" alt="man" />
					<div className="sponsor">
						<span id="span1">sponsored by</span>
						<br />
						<img
							id="sponsorLogo"
							className="mt-3"
							src={sponsorLogo}
							width="70%"
							alt="Sponsor"
						/>
					</div>
					<img id="womanImg" src={woman} width="20%" alt="woman" />
				</div>

				<div className="event">
					<img id="fusionLogo" src={FusionLogo} width="70%" alt="Fusion" />
					<br />
					<span id="span2">Garba & DJ Night</span>
					<br />
					<span
						id="span4"
						className="d-flex justify-content-around my-4 text-uppercase mx-auto px-3"
					>
						{" "}
						<div>Food</div> | <div>PhotoBooth</div> | <div>Fun</div>{" "}
					</span>
				</div>
				<div className="register-button my-3">
					<Button variant="primary	">
						<Link to="/register" className="text-white">
							Register Now
						</Link>
					</Button>
				</div>
				<div className="event-detail">
					<div>
						<div className="event-date">
							Date : 1<sup>st</sup> October, 2022
						</div>
						<div className="event-time">Time : 5:30 pm</div>
					</div>
					<hr className="mx-auto" id="desktop-hr" />
					<div className="event-venue">
						Venue : Janvi Party Plot, <br />
						Near Piplag Chowkadi, Nadiad.
					</div>
				</div>
			</div>

			{/* Photos */}
			{/* <section className="pt-3 pb-3 container text-center d-grid justify-content-center">
				<h2 className="mb-3 font-weight-bold"> Fusion 2k22 </h2>
				<div className="carousel-width">
					<Carousel showArrows={true}>
						<div>
							<img src={Fusion2k21} />
						</div>
						<div>
							<img src={Fusion2k21} />
						</div>
						<div>
							<img src={Antrixx2k19} />
						</div>
						<div>
							<img src={Fusion2k19} />
						</div>
					</Carousel>
				</div>
			</section>
			<hr /> */}

			<div className="container text-center mt-5">
				<h1
					className="animate-charcter"
					style={{ color: "#820d80", fontStyle: "oblique", fontWeight: 600 }}
				>
					FOR THE STUDENTS,{" "}
				</h1>
				<br />
				<h1
					className="animate-charcter"
					style={{
						color: "rgb(255, 0, 0)",
						fontStyle: "oblique",
						fontWeight: 600,
					}}
				>
					BY THE STUDENTS
				</h1>
			</div>

			{/* Youtube Video */}
			<div className="text-center mt-5 mb-5">
				<embed
					className="youtube-video"
					style={{ border: "1px solid", borderRadius: "3%" }}
					src="https://www.youtube.com/embed/561Rin81lgM?autoplay=1"
					title="Fusion 2k21 || Mitram"
				/>
			</div>

			<hr />

			{/* All Events */}
			<section className="pt-3 pb-5 container text-center d-grid justify-content-center">
				<h2 className="mb-3 font-weight-bold"> Our Events </h2>
				<div className="carousel-width">
					<Carousel showArrows={true}>
						{/* <div>
							<img src={Fusion2k21} />
						</div> */}
						<div>			
							<img src={Fusion2k21} />
						</div>
						<div>
							<img src={Antrixx2k19} />
						</div>
						<div>
							<img src={Fusion2k19} />
						</div>
					</Carousel>
				</div>
			</section>
		</div>
	);
}
