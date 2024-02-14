/** @format */

import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import MitramLogo from "../Images/logo.png";
import { authenticationService } from "services";

// import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar(props) {
	const currentUser = authenticationService.currentUserValue;

	const [expanded, setExpanded] = useState(false);

	// console.log(currentUser)

	// const linkClick = () => {
	// 	var ele1 = document.getElementsByClassName("navbar-toggler");
	// 	var ele2 = document.getElementsByClassName("navbar-collapse");

	// 	console.log(ele1.innerHtml);
	// 	console.log(ele2.innerHtml);
	// }

	return (
		<>
			<Navbar bg="light" expand="lg" expanded={expanded}>
				<Navbar.Brand>
					<Link to="/" onClick={() => setExpanded(false)}>
						<img className="logo-img" alt="logo" src={MitramLogo} />
						Mitram
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					onClick={() => setExpanded(expanded ? false : "expanded")}
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{props.user && (
							<Link to="/" onClick={() => setExpanded(false)}>
								Hello {props.user.name}
							</Link>
						)}
						{props.user && (
							<Link to="/soldpasslist" onClick={() => setExpanded(false)}>
								Sold Passes
							</Link>
						)}
						{props.user && (
							<Link to="/analytics" onClick={() => setExpanded(false)}>
								Analytics
							</Link>
						)}
						<Link to="/register" onClick={() => setExpanded(false)}>
							Register
						</Link>
						<Link to="/qrcheck" onClick={() => setExpanded(false)}>
							Verify Your Pass
						</Link>
						<Link to="/about" onClick={() => setExpanded(false)}>
							About
						</Link>
						<Link to="/contact-us" onClick={() => setExpanded(false)}>
							Contact Us
						</Link>
						{props.user && props.user.role === "Admin" && (
							<Link to="/confirmation" onClick={() => setExpanded(false)}>
								ConfirmationPage
							</Link>
						)}
						{props.user && props.user.role === "Admin" && (
							<Link to="/qrcode" onClick={() => setExpanded(false)}>
								QR-Scanner
							</Link>
						)}
						{props.user && (
							<Link to="/" onClick={authenticationService.logout}>
								Log Out
							</Link>
						)}
						{/* <Link to="/terms-and-condition">Terms&Conditions</Link> */}

						{/* <NavDropdown title="Events" id="basic-nav-dropdown">
							<NavDropdown.Item href="/fusin2k21">Fusion 2k21</NavDropdown.Item>
							<NavDropdown.Item href="/antrixx2k19">Antrixx 2k19</NavDropdown.Item>
							<NavDropdown.Item href="fusion2k19">Fusion 2k19</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default CustomNavbar;
