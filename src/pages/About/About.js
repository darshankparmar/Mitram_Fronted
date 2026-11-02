/** @format */

import React from "react";
import "./About.css";
// import QRCode from "react-qr-code";
import logoImg from "pages/Home/Images/Mitram_LOGO.png";

export default function About() {
	return (
		<div className="about-us componentHeight">
			<div className="container">
				<div className="wrapper-about-us">
					<img src={logoImg} alt="Mitram Group" className="about-logo" />
					<span className="about-kicker">Our story</span>
					<h1 className="about-title">
						For the students, <em>by the students.</em>
					</h1>
					{/* <p className="mission-txt">FOR THE STUDENTS, BY THE STUDENTS</p> */}
				</div>

				<div className="wrapper-about-us">
					{/* <h2>About</h2> */}
					<div>
						<p>
							Mitram Group began as an idea in a small office in Nadiad in
							September 2019. The vision was clear from day one: to create
							better, inclusive and affordable events for the people of Nadiad.
						</p>
						<p>
							After just 20 days of planning and execution, we hosted our very
							first event, Fusion 2019, a Garba &amp; DJ night. It was a huge
							success, with a footfall of more than 500 people.
						</p>
						<p>
							That same year we rang in the new year with Antrixx 2019, which
							brought together another 500+ guests. In 2021 Fusion returned to
							the ground and again drew a crowd of more than 500.
						</p>
						<p>
							Since then Fusion has become a tradition. Fusion 2023, Fusion 5.0
							in 2024 and Fusion 6.0 in 2025 have each carried forward the same
							promise: music, garba and memories that people talk about all
							year.
						</p>
						<p>
							What started as the brainchild of a few friends has grown into a
							big family. Mitram Group thanks everyone who has been part of this
							journey, and especially our all-star team, whose hard work has made
							every event a success.
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
