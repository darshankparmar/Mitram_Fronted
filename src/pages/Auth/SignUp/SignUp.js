import React from 'react';
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
		<div className="signup d-flex justify-content-center px-3">
			<div className="wrapper my-3">
				<div className="title">SignUp</div>
				<form action="#">
					<div className="field">
						<input type="text" required />
						<label>Username</label>
					</div>
					<div className="field">
						<input type="text" required />
						<label>Name</label>
					</div>
					<div className="field">
						<input type="text" required />
						<label>Email</label>
					</div>
					<div className="field">
						<input type="number" required />
						<label>Mobile No</label>
					</div>
					<div className="field">
						<input type="password" required />
						<label>Password</label>
					</div>
					<div className="field">
						<input type="submit" value="SignUp" />
					</div>
					<div className="signup-link">
						Already Registered? <Link to="/login">Login now</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
