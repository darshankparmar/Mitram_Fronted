/** @format */

import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="login d-flex justify-content-center px-3">
			<div className="wrapper my-3">
				<div className="title">Login</div>
				<form action="#">
					<div className="field">
						<input type="text" required />
						<label>Username</label>
					</div>
					<div className="field">
						<input type="password" required />
						<label>Password</label>
					</div>
					<div className="field">
						<input type="submit" value="Login" />
					</div>
					<div className="signup-link">
						Not a member? <Link to="/signup">Signup now</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
