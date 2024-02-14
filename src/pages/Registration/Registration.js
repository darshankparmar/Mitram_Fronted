/** @format */

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import "./Registration.css";
import { participantsService } from "services";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import FusionLogo from "pages/Home/Images/Fusion_LOGO.png";
import man from "pages/Home/Images/man.png";
import woman from "pages/Home/Images/woman.png";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Fusion</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					1. This pass is your ticket for the event . Please retain it with you
					until the event ends.
					<br />
					2. Any misbehaviour will lead to termination from the event and strict
					lawful actions will be taken.
					<br />
					3. Strict punishable actions will be taken if we find drugs or
					alcoholic substances with you. <br />
					4. Keep your belongings safe. We are not responsible for any loss of
					your personal belongings <br />
					5. We will not be providing transportation after 12:30 am. <br />
					6. Please be on the pickup location at 5:00 pm.
					<br />
					7. Entry will given between 5 p.m. to 7 p.m.
					<br />
					8. Pass Details can’t be updated.
					<br />
				</p>
				<p style={{ color: "red" }}>
					9. Physical Student ID card and pass is mandatory for entry
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

function Registration(props) {
	const navigate = useNavigate();
	const [participants, setParticipants] = useState([{}]);
	const [count, setCount] = useState(1);
	const passPrice = 270;

	var msDiff = new Date("March 1, 2024").getTime() - new Date().getTime(); //Future date - current date
	var daysTill = Math.floor(msDiff / (1000 * 60 * 60 * 24));

	const [modalShow, setModalShow] = useState(false);

	const AddParticipant = async () => {
		//check

		if (!(await validate())) return;

		const participant = {};
		setParticipants([...participants, participant]);
		setCount(count + 1);
	};

	const validate = async () => {
		// console.log("here");

		for (var i = 0; i < count; i++) {
			if (
				!participants[i].name ||
				!participants[i].collegeId ||
				!participants[i].department ||
				!participants[i].email ||
				!participants[i].mobileNo ||
				!participants[i].gender
			) {
				console.log("here");
				console.log(participants[i]);
				alert("Please Enter Required Details");
				setValidated(true);
				return false;
			}
			if (
				participants[i].name === "" ||
				participants[i].collegeId === "" ||
				participants[i].department === "" ||
				participants[i].email === "" ||
				participants[i].mobileNo === "" ||
				participants[i].gender === ""
			) {
				alert("Please Enter Required Details");
				setValidated(true);
				return false;
			}

			if (participants[i].mobileNo.length !== 10) {
				alert("Please Enter Valid Mobile No");
				setValidated(true);
				return false;
			}

			if (!validateEmail(participants[i].email)) {
				alert("Please Enter Valid Email");
				setValidated(true);
				return false;
			}
			console.log(participants[i].collegeId);
			const val = await participantsService
				.search(participants[i].collegeId)
				.then((res) => {
					console.log(res.code);

					return res.data;
				});
			console.log(val);
			if (val.length !== 0) {
				alert("COllege Id is Already used");
				return false;
			}
		}
		return true;
	};

	const handleInputs = (e, index) => {
		const x = e.target.name;
		let newPart = [...participants];
		newPart[index][x] = e.target.value;
		setParticipants(newPart);
		console.log(participants);
	};

	const removePerson = (index) => {
		if (!window.confirm("Are you sure you would to delete?")) return;
		// console.log(index);
		if (index === 0) {
			alert("You are not removed this person");
			return;
		}
		let newPart = [...participants];
		newPart.splice(index, 1);
		setParticipants(newPart);
		setCount(count - 1);
	};

	const [validated, setValidated] = useState(false);

	const validateEmail = (email) => {
		return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);
	};

	const handleSubmit = () => {
		// const form = event.currentTarget;
		// if (form.checkValidity() === false) {
		// 	event.preventDefault();
		// 	event.stopPropagation();
		// }

		try
		{
			participants.map((participant, index) => {
			
				participants[index].collegeId = participants[index].collegeId
				.trim()
				.toUpperCase();
				participants[index].name = participants[index].name.trim();
			});
		}
		catch {}
		
		// console.log(participants);

		validate().then((val) => {
			if (!val) return false;

			if (!document.getElementById("termCheckBox").checked) {
				alert("Please Agree to Terms & Condition");
				return false;
			}

			var length = participants.length;

			// cashPayment
			if (document.getElementById("cashPayment").checked) {
				const client_txn_id = Date.now().toString();
				for (let i = 0; i < length; i++) {
					participants[i].paymentMode = "Cash";
					participants[i].client_txn_id = client_txn_id;
				}

				participantsService.register(participants).then((res) => {
					navigate(`/checkout-cash`, {
						state: { data: { ...participants[0], amount: count * passPrice } },
					});
				});
			}

			// onlinePayment
			if (document.getElementById("onlinePayment").checked) {
				const payload = {
					amount: (count * passPrice).toString(),
					customer_name: participants[0].name,
					customer_email: participants[0].email,
					customer_mobile: participants[0].mobileNo,
				};

				for (let i = 0; i < length; i++) {
					participants[i].paymentMode = "Online";
				}

				participantsService.pay({ payload, participants }).then((res) => {
					console.log(res.data);

					localStorage.setItem("participants", JSON.stringify(participants));
					console.log(participants);
					window.location.href = res.data.payment_url;
				});
			}
		});
		// console.log(document.getElementById("termCheckBox").checked);
	};

	// console.log("વારંવાર યાદ કરાવા છત્તા તમારી આળસ અને તમારી બેદરકારી ને લીધે આજે તમે એક ખૂબ જ સરસ એવી નવરાત્રી ચુકી ગયા છો. Pass લેવા માટે કેટલા call કર્યા પણ 'કૂતરાની પુંછડી વાંકી એ વાંકી'");

	return (
		<>
			<div className="register-page container componentHeight">
					<Form className="registration-form" noValidate validated={validated}>
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
														className="text-uppercase"
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
													<Form.Select
														name="department"
														aria-label="Default select example"
														onChange={(e) => {
															handleInputs(e, index);
														}}
														required
													>
														<option value="">Select your Department</option>
														<option value="Engineering">Engineering</option>
														<option value="Dental">Dental</option>
														<option value="Ayurvedic">Ayurvedic</option>
														<option value="Pharmacy">Pharmacy</option>
														<option value="MBA">MBA/MCA/BCA/BBA</option>
														<option value="MBBS">MBBS</option>
													</Form.Select>
													<Form.Control.Feedback type="invalid">
														Please Select Department.
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group className="mb-3">
												<Form.Label>Email</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														className="text-lowercase"
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
														isInvalid={
															participant.mobileNo &&
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
												<Form.Label>
													PickUp Address (Only For Girls){" "}
												</Form.Label>
												{/* <OverlayTrigger
												placement="right"
												delay={{ show: 250, hide: 400 }}
												overlay={renderTooltip}
											>
												<i
													className="fa-solid fa-circle-info"
													style={{ marginLeft: "3px" }}
												></i>
											</OverlayTrigger> */}
												<Form.Select
													name="pickup"
													aria-label="Default select example"
													onChange={(e) => {
														handleInputs(e, index);
													}}
												>
													<option value="0">Select your Address</option>
													<option value="1">Vaniyavad</option>
													<option value="2">Dominos</option>
													<option value="3">Ayurvedic</option>
													<option value="4">Sudarshan Dairy</option>
												</Form.Select>
											</Form.Group>
											{/* <Form.Group controlId="formFile" className="mb-3">
											<Form.Label>Upload Your Id Card</Form.Label>
											<Form.Control type="file" />
										</Form.Group> */}

											{index === 0 ? null : (
												<>
													<hr />
													<Button
														variant="danger"
														onClick={() => removePerson(index)}
													>
														Remove Person
													</Button>
												</>
											)}
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
										label="Online Payment"
										name="group1"
										type="radio"
										id="onlinePayment"
										defaultChecked
									/>
									<Form.Check
										inline
										label="Cash"
										name="group1"
										type="radio"
										id="cashPayment"
									/>
								</div>
								<Form.Group className="mb-3 d-flex">
									<Form.Check
										required
										id="termCheckBox"
										label="Agree to "
										feedback="You must agree before submitting."
										feedbackType="invalid"
									/>
									<div
										onClick={() => setModalShow(true)}
										style={{ cursor: "pointer", color: "red" }}
									>
										&nbsp; terms and conditions
									</div>
									<MyVerticallyCenteredModal
										show={modalShow}
										onHide={() => setModalShow(false)}
									/>
								</Form.Group>

								<button
									className="checkout-button"
									type="button"
									onClick={handleSubmit}
								>
									Pay Now
								</button>
							</div>
						</div>
					</Form>
				</div>
		</>
	);
}

export default Registration;
