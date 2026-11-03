/** @format */

import React, { useState } from "react";
import "./ContactUs.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import contactService from "services/contact.service";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();

	const [user, setUser] = useState({});

	const validateEmail = (email) => {
		return email.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);
	};

	const handleInputs = (e) => {
		const x = e.target.name;
		let newPart = { ...user };
		newPart[x] = e.target.value;
		setUser(newPart);
	};

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		if (!user.name || !user.email || !user.mobileNo || !user.message) {
			alert("Please Enter Required Details");
			setValidated(true);
			return false;
		}
		if (user.mobileNo.length !== 10) {
			alert("Please Enter Valid Mobile No");
			setValidated(true);
			return false;
		}

		if (!validateEmail(user.email)) {
			alert("Please Enter Valid Email");
			setValidated(true);
			return false;
		}

		setValidated(true);

		contactService.create(user).then((res) => 
			{
				alert("Successfull. We will contact you soon.");
				navigate("/");
		 	}
		);
	};

	return (
		<>
			<div className="contact-us mx-auto mb-5 componentHeight">
				<Form className="contact-us-form" noValidate validated={validated}>
					<div className="title text-center my-4">Contact Us</div>
					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label>Name</Form.Label>
						<InputGroup hasValidation>
							<Form.Control
								name="name"
								type="text"
								value={user.name}
								placeholder="Enter Your Name"
								onChange={(e) => {
									handleInputs(e);
								}}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please Enter Valid Name.
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<InputGroup hasValidation>
							<Form.Control
								name="email"
								type="email"
								value={user.email}
								placeholder="Enter email"
								onChange={(e) => {
									handleInputs(e);
								}}
								pattern=".+@gmail\.com"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please Enter Valid Email.
							</Form.Control.Feedback>
						</InputGroup>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicMobile">
						<Form.Label>Mobile No</Form.Label>
						<InputGroup hasValidation>
							<Form.Control
								name="mobileNo"
								type="number"
								value={user.mobileNo}
								placeholder="Enter Mobile No"
								onChange={(e) => {
									handleInputs(e);
								}}
								required
								maxLength={10}
								isInvalid={
									user.mobileNo &&
									(user.mobileNo.length < 10 || user.mobileNo.length > 10)
								}
							/>
							<Form.Control.Feedback type="invalid">
								Please Enter Valid Mobile No.
							</Form.Control.Feedback>
						</InputGroup>
						<Form.Text className="text-muted">
							We'll never share your mobile no with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Payment Id</Form.Label>
						<InputGroup hasValidation>
							<Form.Control
								name="paymentId"
								value={user.paymentId}
								type="text"
								placeholder="Enter Payment Id (Optinal)"
								onChange={(e) => {
									handleInputs(e);
								}}
							/>
						</InputGroup>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Message</Form.Label>
						<InputGroup hasValidation>
							<Form.Control
								name="message"
								as="textarea"
								type="text"
								value={user.message}
								placeholder="Type your message here..."
								onChange={(e) => {
									handleInputs(e);
								}}
								style={{ height: "100px" }}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please Enter Valid Message.
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
					<Button variant="primary" type="button" onClick={handleSubmit}>
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
}
