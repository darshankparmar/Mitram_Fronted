/** @format */

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import MitramLogo from "../Images/logo.png";
// import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>
					<Link to="/">
						<img className="logo-img" alt="logo" src={MitramLogo} />
						Mitram
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/register">Register</Link>
						<Link to="/about">About</Link>
						<Link to="/contact-us">Contact Us</Link>
						<Link to="/login">Login</Link>
						<Link to="/pending-Participant">Pending</Link>
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
