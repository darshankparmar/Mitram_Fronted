/** @format */

import React from "react";
import "./ContactUs.css";
// import Button from "react-bootstrap/Button";

export default function ContactUs() {
	return (
		<>
			<div className="contact-us">
				<div className="container1 px-3">
					<form id="contact" action="" method="post">
						<h3>Contact Us</h3>
						<fieldset>
							<input
								placeholder="Your name"
								type="text"
								tabindex="1"
								required
								autofocus
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="Your Email Address"
								type="email"
								tabindex="2"
								required
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="Your Phone Number"
								type="tel"
								tabindex="3"
								required
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="Your Payment ID (optional)"        
								type="url"
								tabindex="4"
								required
							/>
						</fieldset>
						<fieldset>
							<textarea
								placeholder="Type your message here...."
								tabindex="5"
								required
							></textarea>
						</fieldset>
						<fieldset>
							<button
								name="submit"
								type="submit"
								id="contact-submit"
								data-submit="...Sending"
							>
								Submit
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</>
	);
}
