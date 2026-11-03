/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { authenticationService } from "services";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "./ListOfUsers.css";

export default function ListOfUsers() {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const [onlineVerified, setOnlineVerified] = useState(0);
	const [onlineNotVerified, setOnlineNotVerified] = useState(0);
	const [cashVerified, setCashVerified] = useState(0);
	const [cashNotVerified, setCashNotVerified] = useState(0);
	const [department, setDepartment] = useState({});
	const [pickUp, setPickUp] = useState({});
	const [notVerifiedCashList, setnotVerifiedCashList] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			authenticationService.getUsers().then((data) => {
				setUsers(data.users);
				setCashNotVerified(data.notVerifiedCash);
				setCashVerified(data.verifiedCash);
				setOnlineVerified(data.verifiedOnline);
				setOnlineNotVerified(data.notVerifiedOnline);
				setDepartment(data.department);
				setPickUp(data.pickUp);
				setnotVerifiedCashList(data.notVerifiedCashList);
			});
		};
		loadData();
	}, []);
	return (
		<div className="list componentHeight container my-5">
			<div className="analytics-details">
				<div className="mx-2 my-3" style={{ width: "350px" }}>
					<ListGroup as="ol">
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Cash Verified</div>
							</div>
							<Badge bg="primary" pill>
								{cashVerified}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Cash Unverified</div>
							</div>
							<Badge bg="primary" pill>
								{cashNotVerified}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Online Verified</div>
							</div>
							<Badge bg="primary" pill>
								{onlineVerified}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Online Unverified</div>
							</div>
							<Badge bg="primary" pill>
								{onlineNotVerified}
							</Badge>
						</ListGroup.Item>
						<hr />
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Total</div>
							</div>
							<Badge bg="primary" pill>
								{onlineNotVerified + onlineVerified + cashVerified}
							</Badge>
						</ListGroup.Item>
					</ListGroup>
				</div>
				<div className="mx-2 my-3" style={{ width: "350px" }}>
					<ListGroup as="ol">
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Engineering</div>
							</div>
							<Badge bg="primary" pill>
								{department.Engineering}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Dental</div>
							</div>
							<Badge bg="primary" pill>
								{department.Dental}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Pharmacy</div>
							</div>
							<Badge bg="primary" pill>
								{department.Pharmacy}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Ayurvedic</div>
							</div>
							<Badge bg="primary" pill>
								{department.Ayurvedic}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">MBA/MCA/BCA/BBA</div>
							</div>
							<Badge bg="primary" pill>
								{department.MBA}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">MBBS</div>
							</div>
							<Badge bg="primary" pill>
								{department.MBBS}
							</Badge>
						</ListGroup.Item>
					</ListGroup>
				</div>
				<div className="mx-2 my-3" style={{ width: "350px" }}>
					<ListGroup as="ol">
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">CE</div>
							</div>
							<Badge bg="primary" pill>
								{department.CE}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">EC</div>
							</div>
							<Badge bg="primary" pill>
								{department.EC}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">IC</div>
							</div>
							<Badge bg="primary" pill>
								{department.IC}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">CL</div>
							</div>
							<Badge bg="primary" pill>
								{department.CL}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">MH</div>
							</div>
							<Badge bg="primary" pill>
								{department.MH}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">IT</div>
							</div>
							<Badge bg="primary" pill>
								{department.IT}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">CH</div>
							</div>
							<Badge bg="primary" pill>
								{department.CH}
							</Badge>
						</ListGroup.Item>
					</ListGroup>
				</div>
				<div className="mx-2 my-3" style={{ width: "350px" }}>
					<ListGroup as="ol">
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Vaniyavad</div>
							</div>
							<Badge bg="primary" pill>
								{pickUp.Vaniyavad}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Dominos</div>
							</div>
							<Badge bg="primary" pill>
								{pickUp.Dominos}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Ayurvedic</div>
							</div>
							<Badge bg="primary" pill>
								{pickUp.Ayurvedic}
							</Badge>
						</ListGroup.Item>
						<ListGroup.Item
							as="li"
							className="d-flex justify-content-between align-items-start"
						>
							<div className="ms-2 me-auto">
								<div className="fw-bold">Sudarshan Dairy</div>
							</div>
							<Badge bg="primary" pill>
								{pickUp.Sudarshan}
							</Badge>
						</ListGroup.Item>
					</ListGroup>
				</div>
			</div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						{/* <th>Username</th> */}
						<th>Name</th>
						{/* <th>Mobile No</th> */}
						{/* <th>Email</th> */}
						<th>Total</th>
						<th>Check</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								{/* <td>{user.username}</td> */}
								<td>{user.name}</td>
								{/* <td>{user.mobileNo}</td> */}
								{/* <td>{user.email}</td> */}
								<td>{user.passAssigned}</td>
								<td>
									<i
										className="fa-sharp fa-solid fa-arrow-right"
										onClick={() => {
											navigate("/user-info", { state: { user } });
										}}
									></i>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<hr />
			<h3>Cash Unverified List</h3>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Mobile No</th>
						<th>College Id</th>
						<th>Client Txn Id</th>
					</tr>
				</thead>
				<tbody>
					{notVerifiedCashList.map((user, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{user.name}</td>
								<td>
									<a href={"tel:" + user.mobileNo}>{user.mobileNo}</a>
								</td>
								<td>{user.collegeId}</td>
								<td>{user.client_txn_id}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}
