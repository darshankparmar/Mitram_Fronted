/** @format */

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import "./Registration.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Registration() {
	const [participants, setParticipants] = useState([{}]);
	const [count, setCount] = useState(1);
	const [passPrice, setPassPrice] = useState(300);

	const AddParticipant = () => {
		const participant = {
			// name: "",
			// collegeId: "",
			// department: "",
			// email: "",
			// mobileNo: "",
			// pickup: "NA",
			// gender: "Male",
		};
		setParticipants([...participants, participant]);
		setCount(count + 1);
	};

	const handleInputs = (e, index) => {
		// console.log(e);
		// console.log(index);
		// console.log(e.target.name);
		// console.log(e.target.value);

		const x = e.target.name;
		let newPart = [...participants];
		newPart[index][x] = e.target.value;
		setParticipants(newPart);
		console.log(participants);
	};

	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Only For Girls
		</Tooltip>
	);

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<div className="container">
			<Form
				className="registration-form"
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
			>
				<Accordion defaultActiveKey={count - 1}>
					{participants.map((participant, index) => {
						return (
							<Accordion.Item eventKey={index} key={index}>
								<Accordion.Header>
									{index +
										1 +
										". " +
										(participant.name ? participant.name : "Enter Details")}
								</Accordion.Header>

								<Accordion.Body>
									<Form.Group className="mb-3">
										<Form.Label>Name</Form.Label>
										<InputGroup hasValidation>
											<Form.Control
												name="name"
												type="text"
												placeholder="Enter Full Name"
												value={participant.name}
												onChange={(e) => {
													handleInputs(e, index);
												}}
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please Enter Valid Name.
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>

									<Form.Group className="mb-3">
										<Form.Label>College Id</Form.Label>
										<InputGroup hasValidation>
											<Form.Control
												name="collegeId"
												type="text"
												placeholder="Enter College Id"
												value={participant.collegeId}
												onChange={(e) => {
													handleInputs(e, index);
												}}
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please Enter Valid College Id.
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Department</Form.Label>
										<InputGroup hasValidation>
											<Form.Control
												name="department"
												type="text"
												placeholder="Enter Department"
												value={participant.department}
												onChange={(e) => {
													handleInputs(e, index);
												}}
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please Enter Valid Department.
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Email</Form.Label>
										<InputGroup hasValidation>
											<Form.Control
												name="email"
												type="email"
												placeholder="Enter Email"
												value={participant.email}
												onChange={(e) => {
													handleInputs(e, index);
												}}
												required
												pattern=".+@gmail\.com"
											/>
											<Form.Control.Feedback type="invalid">
												Please Enter Valid Email.
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Mobile No</Form.Label>
										<InputGroup hasValidation>
											<Form.Control
												name="mobileNo"
												type="number"
												placeholder="Enter Mobile No"
												value={participant.mobileNo}
												onChange={(e) => {
													handleInputs(e, index);
												}}
												maxLength={10}
												isInvalid={(participant.mobileNo) &&
													(participant.mobileNo.length < 10 ||
													participant.mobileNo.length > 10)
												}
												required
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
										<Form.Label>Gender</Form.Label>
										<InputGroup hasValidation>
											<Form.Select
												name="gender"
												aria-label="Default select example"
												onChange={(e) => {
													handleInputs(e, index);
												}}
												required
											>
												<option value="">Select your Gender</option>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
												<option value="Other">Other</option>
											</Form.Select>
											<Form.Control.Feedback type="invalid">
												Please Select Gender.
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>PickUp Address </Form.Label>
										<OverlayTrigger
											placement="right"
											delay={{ show: 250, hide: 400 }}
											overlay={renderTooltip}
										>
											<i
												className="fa-solid fa-circle-info"
												style={{ marginLeft: "3px" }}
											></i>
										</OverlayTrigger>
										<Form.Select
											name="PickUp"
											aria-label="Default select example"
											onChange={(e) => {
												handleInputs(e, index);
											}}
										>
											<option value="0">Select your Address</option>
											<option value="1">Vaniyavad</option>
											<option value="2">Dominos</option>
											<option value="3">Inox</option>
										</Form.Select>
									</Form.Group>
									{/* <Form.Group controlId="formFile" className="mb-3">
										<Form.Label>Upload Your Id Card</Form.Label>
										<Form.Control type="file" />
									</Form.Group> */}
									<hr />
									<Button variant="danger" disabled>
										Remove Person
									</Button>
								</Accordion.Body>
							</Accordion.Item>
						);
					})}
				</Accordion>
				<Button
					className="addPart"
					variant="primary"
					type="button"
					onClick={AddParticipant}
				>
					<i className="fa-solid fa-circle-plus"></i> Add Participant
				</Button>
				<hr />
				<div className="d-flex justify-content-end">
					<div className="checkout">
						<div className="total">
							<div>
								<div className="Subtotal">Sub-Total</div>
								<div className="items">{count} persons</div>
							</div>
							<div className="total-amount">Rs. {count * passPrice}</div>
						</div>
						<hr />
						<div key={`inline-radio`} className="mb-3">
							<Form.Check
								inline
								label="Cash"
								name="group1"
								type="radio"
								id={`inline-radio-1`}
								defaultChecked
							/>
							<Form.Check
								inline
								label="Online Payment"
								name="group1"
								type="radio"
								id={`inline-radio-2`}
								disabled
							/>
						</div>
						<Form.Group className="mb-3">
							<Form.Check
								required
								label="Agree to terms and conditions"
								feedback="You must agree before submitting."
								feedbackType="invalid"
							/>
						</Form.Group>
						<button className="checkout-button" type="submit">
							Pay Now
						</button>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default Registration;
