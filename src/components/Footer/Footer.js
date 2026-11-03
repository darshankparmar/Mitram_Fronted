/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import MitramLogo from "pages/Home/Images/Mitram_LOGO.png";

export default function Footer() {
	return (
		<footer className="m-footer">
			<div className="m-footer-inner">
				<div className="m-footer-brand">
					<img src={MitramLogo} alt="Mitram Group" />
					<p>For the students, by the students. Bringing Nadiad together since 2019.</p>
					<div className="media-icons">
						<a
							href="https://www.instagram.com/mitramgroup/"
							rel="noreferrer"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram"></i>
						</a>
						<a
							href="https://www.linkedin.com/company/mitram-group/"
							rel="noreferrer"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a
							href="https://medium.com/@ronakdattani/the-rise-of-mitram-group-d016d77996af"
							rel="noreferrer"
							target="_blank"
							aria-label="Medium"
						>
							<i className="fab fa-medium"></i>
						</a>
					</div>
				</div>

				<div className="m-footer-col">
					<h4>Explore</h4>
					<Link to="/about">About</Link>
					<Link to="/register">Register</Link>
					<Link to="/qrcheck">Verify Your Pass</Link>
					<Link to="/contact-us">Contact Us</Link>
				</div>

				<div className="m-footer-col">
					<h4>Get in touch</h4>
					<a href="tel:8469108864">
						<i className="fas fa-phone"></i> +91 8469108864
					</a>
					<a href="tel:8849410031">
						<i className="fas fa-phone"></i> +91 8849410031
					</a>
					<a href="mailto:mitramgroupnadiad@gmail.com">
						<i className="fas fa-envelope"></i> mitramgroupnadiad@gmail.com
					</a>
				</div>
			</div>

			<div className="m-footer-bottom">
				<span>© {new Date().getFullYear()} Mitram Group, Nadiad</span>
				<span>
					<Link to="/privacy">Privacy</Link>
					<Link to="/terms-and-condition">Terms</Link>
				</span>
			</div>
		</footer>
	);
}
