/** @format */

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import { authenticationService } from "services";
import Accordion from "react-bootstrap/Accordion";

export default function ListOfParticipants() {
	const { state } = useLocation();

	const { user } = state ? state : null;
	const [online, setOnline] = useState([]);
	const [cash, setCash] = useState([]);
	useEffect(() => {
		const loadData = async () => {
			authenticationService.getUserInfo(user._id).then((data) => {
				setOnline(data.online);
				setCash(data.cash);
				// console.log(data);
			});
		};
		loadData();
	// eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
	}, []);

	return (
		<div className="componentHeight container my-5">
			<h1 className="text-center">
				{user.name}
				<br /> Total = {cash.length + online.length}
			</h1>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<h3>
							Cash : {cash.length} * 270 = {cash.length * 270}
						</h3>
					</Accordion.Header>
					<Accordion.Body>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>College Id</th>
									<th>Mobile No</th>
									<th>Email</th>
								</tr>
							</thead>
							<tbody>
								{cash.map((participant, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{participant.name}</td>
											<td>{participant.collegeId}</td>
											<td>{participant.mobileNo}</td>
											<td>{participant.email}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>
						<h3>Online : {online.length}</h3>
					</Accordion.Header>
					<Accordion.Body>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>College Id</th>
									<th>Mobile No</th>
									<th>Email</th>
								</tr>
							</thead>
							<tbody>
								{online.map((participant, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{participant.name}</td>
											<td>{participant.collegeId}</td>
											<td>{participant.mobileNo}</td>
											<td>{participant.email}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}
