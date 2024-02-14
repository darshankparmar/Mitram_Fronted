/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { authenticationService } from "services";

export default function SignUp() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [Name, setName] = useState("");
	const [mobileNo, setMobile] = useState("");
	const [email, setEmail] = useState("");

	function handleLogin() {

		if(username === "")
		{
			window.alert("Username Empty");
			return;
		}

		if (password === "") {
			window.alert("Password Empty");
			return;
		}
		if (Name === "") {
			window.alert("Name Empty");
			return;
		}
		if (mobileNo === "" || !mobileNo.match(/^\d{10}$/)) {
			window.alert("Mobile Not Valid");
			return;
		}
		if (
			email === "" ||
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
				email,
			)
		) {
			window.alert("Email Not Valid");
			return;
		}
	
		authenticationService
			.register({username, password,name:Name,mobileNo,email})
			.then((user) => {
				navigate('/login');
			})
			.catch((error) => {
				console.log(error.message)
				window.alert(error);
			});
	}

	return (
		<div className="signup d-flex justify-content-center px-3 componentHeight">
			<div className="wrapper my-3">
				<div className="title">SignUp</div>
				<form action="#">
					<div className="field">
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
						<label>Username</label>
					</div>
					<div className="field">
						<input
							type="text"
							value={Name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							required
						/>
						<label>Name</label>
					</div>
					<div className="field">
						<input
							type="text"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							required
						/>
						<label>Email</label>
					</div>
					<div className="field">
						<input
							type="number"
							value={mobileNo}
							onChange={(e) => {
								setMobile(e.target.value);
							}}
							required
						/>
						<label>Mobile No</label>
					</div>
					<div className="field">
						<input
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
						/>
						<label>Password</label>
					</div>
					<div className="field">
						<input type="button" value="SignUp" onClick={handleLogin} />
					</div>
					<div className="signup-link">
						Already Registered? <Link to="/login">Login now</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
