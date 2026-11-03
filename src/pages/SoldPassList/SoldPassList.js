/** @format */

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { authenticationService } from "services";
import Accordion from "react-bootstrap/Accordion";

export default function SoldPassList(props) {
	const [online, setOnline] = useState([]);
	const [cash, setCash] = useState([]);

    useEffect(() => {
			const loadData = async () => {
				authenticationService.getUserInfo(props.user._id).then((data) => {
					setOnline(data.online);
					setCash(data.cash);
					// console.log(data);
				});
			};
			if(props.user) loadData();
		}, [props.user]); 

	return (
		<>
			{props.user ? (
				<div className="componentHeight container my-5">
					<h1 className="text-center">
						{props.user.name}
						<br />
						Total = {cash.length + online.length}
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
												</tr>
											);
										})}
									</tbody>
								</Table>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			) : null}
		</>
	);
}
