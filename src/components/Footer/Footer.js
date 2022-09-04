/** @format */

import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="content">
				<div className="top">
					<div className="logo-details">
						<span className="logo_name"> Mitram</span>
					</div>
					<div className="media-icons">
						<a href="https://facebook.com">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://twitter.com">
							<i className="fab fa-twitter"></i>
						</a>
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
