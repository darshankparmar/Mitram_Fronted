/** @format */

import React from "react";
import "./About.css";
// import QRCode from "react-qr-code";
import logoImg from "./logo.png";

export default function About() {
	return (
		<div className="about-us componentHeight">
			<div className="container">
				<div className="wrapper-about-us">
					<img src={logoImg} alt="img" width="50%" />
					<h1
						className="animate-charcter"
						style={{ color: "#820d80", fontStyle: "oblique", fontWeight: 600 }}
					>
						FOR THE STUDENTS,{" "}
					</h1>
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
					{/* <p className="mission-txt">FOR THE STUDENTS, BY THE STUDENTS</p> */}
				</div>

				<div className="wrapper-about-us">
					{/* <h2>About</h2> */}
					<div>
						<p>
							Mitram group started as an idea in a small office of nadiad in
							September 2019. The vision was clear from the beginning: to
							organise a better, inclusive and affordable event for the people
							of nadiad.{" "}
						</p>
						<p>
							Within mere 20 days of planning and execution, Mitram group had
							it's first ever event: Fusion 2019 - Dj and Garba night. It was a
							fabulous success with the footfall of 500+.{" "}
						</p>
						<p>
							After the tremendous success of fusion 2019, mitram organized two
							more events. A new year party: Antrixx 2019 fetched more than 500+
							people and the garba and DJ night Fusion 2021 drew more than 500+
							people to the ground.{" "}
						</p>
						<p>
							Mitram group thanks all the people who are part of this journey
							which started as a brainchild of few people turning into network
							of friends and the all start team who actively helped to every
							event a huge success.
						</p>
					</div>
				</div>

				{/* <div className="wrapper-about-us">
  <h2>Technical Team</h2>
  <div className="faculties">
	<div className="unit">
	  <img src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/Principal.jpg" alt="" />
	  <p>Darshan Parmar</p>
	  <div className="social-links d-flex">
		<a className="social-icon social-icon--instagram" href="https://www.instagram.com/darshankparmar/"
			rel="noreferrer"
			target="_blank">
            <i className="fa fa-instagram"></i>
        </a>
		<a className="social-icon social-icon--linkedin" href="https://www.linkedin.com/in/darshankparmar/"
			rel="noreferrer"
			target="_blank">
            <i className="fa fa-linkedin"></i>
        </a>
	  </div>
	</div>
	<div className="unit">
	  <img src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/Principal.jpg" alt="" />
	  <p>Yash Miyatra</p>
	  <div className="social-links d-flex">
		<a className="social-icon social-icon--instagram" href="https://www.instagram.com/_life_debugger_"
			rel="noreferrer"
			target="_blank">
            <i className="fa fa-instagram"></i>
        </a>
		<a className="social-icon social-icon--linkedin" href="https://www.linkedin.com/in/yash-miyatra-5b7429192/"
			rel="noreferrer"
			target="_blank">
            <i className="fa fa-linkedin"></i>
        </a>
	  </div>
	</div>
  </div>
</div> */}
			</div>
		</div>
	);
}
