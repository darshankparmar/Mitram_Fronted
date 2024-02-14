/** @format */

import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="content">
				<div className="top">
					<div className="details">
						<div className="logo-details">
							<span className="logo_name"> Mitram</span>
						</div>
						<div
							className="contact-info d-flex row"
							style={{ color: "darkgray" }}
						>
							<div className="contact-mobile-no">
								<i className="fa-solid fa-phone"></i>
								<a href="tel:8469108864">+91 8469108864</a>
							</div>
							<div className="contact-mobile-no">
								<i className="fa-solid fa-phone"></i>
								<a href="tel:8849410031">+91 8849410031</a>
							</div>
							<div className="contact-email">
								<i className="fa-solid fa-envelope"></i>
								<a href="mailto:mitramgroupnadiad@gmail.com">
									mitramgroupnadiad@gmail.com
								</a>
							</div>
						</div>
					</div>
					<div className="media-icons">
						<a
							href="https://www.instagram.com/mitramgroup/"
							rel="noreferrer"
							target="_blank"
						>
							<i className="fab fa-instagram"></i>
						</a>
						<a
							href="https://www.linkedin.com/company/mitram-group/"
							rel="noreferrer"
							target="_blank"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a
							href="https://medium.com/@ronakdattani/the-rise-of-mitram-group-d016d77996af"
							rel="noreferrer"
							target="_blank"
						>
							<i className="fa-brands fa-medium"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
