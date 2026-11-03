/** @format */

import React,{useState,useEffect} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { authenticationService } from "services";

export default function Login() {

	useEffect(() => {
		function redirect(){
			if(authenticationService.currentUserValue)
				navigate('/');
		}
		redirect()
	// eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
	}, []);

	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin() {
		if (username === "") {
			window.alert("Username Empty");
			return;
		}

		if (password === "") {
			window.alert("Password Empty");
			return;
		}

		authenticationService
			.login(username, password)
			.then((user) => {
				navigate("../", { replace: true });
			})
			.catch((error) => {
				window.alert(error);
			});
	}
	return (
		<div className="login d-flex justify-content-center px-3 componentHeight">
			<div className="wrapper my-3">
				<div className="title">Login</div>
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
						<input type="button" value="Login" onClick={handleLogin} />
					</div>
					<div className="signup-link">
						Not a member? <Link to="/signup">Signup now</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
