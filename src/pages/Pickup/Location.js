/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Pickup.css";
import { participantsService } from "services";

function compare(a, b) {
	if (a.name < b.name) {
		return -1;
	}

	if (a.name > b.name) {
		return 1;
	}
	return 0;
}

export default function Location() {
	const { locationId } = useParams();
	const [data, setData] = useState([]);
	const [count, setcount] = useState(0);
	const [searchVal, setSearchVal] = useState("");
	const [remainingPickUp, setremainingPickUp] = useState(0);

	useEffect(() => {
		const loadData = async () => {
			await participantsService.getPickUp(locationId).then((users) => {
				// console.log(users);
				if (searchVal !== "") {
					users = users.filter(
						(user) =>
							user.name.toLowerCase().includes(searchVal.toLowerCase()) ||
							user.mobileNo.includes(searchVal),
					);
				}

				setremainingPickUp(
					users.filter((user) => user.isPickedUp === false).length,
				);

				users.sort(compare);
				users.sort((a, b) => {
					if (a.isPickedUp) return 1;
					if (b.isPickedUp) return -1;

					return 0;
				});
				setData(users);
			});
		};

		loadData();
	}, [searchVal, locationId]);

	const pickedup = async (id, value, index) => {
		participantsService.updatePickUp(id, value).then((res) => {
			// if check box is true then change color
			if (value === true) {
				document.getElementById(id).style.background = "#41db41";
			} else {
				document.getElementById(id).style.background = "white";
			}
		});

		data[index].isPickedUp = value;
		setData(data);
		setcount(count + 1);
		setremainingPickUp(data.filter((user) => user.isPickedUp === false).length);
	};
	return (
		<div
			className={locationId + "-pickup componentHeight text-center my-3 mx-2"}
		>
			<h3 className="mb-3">
				{locationId.charAt(0).toUpperCase() + locationId.slice(1)} -{" "}
				{remainingPickUp}
			</h3>

			{/* search by name & mobile no */}
			<div className="d-flex my-3 mx-3">
				<Form.Control
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
					value={searchVal}
					onChange={(e) => {
						setSearchVal(e.target.value);
					}}
				/>
				<Button variant="outline-success" onClick={() => setSearchVal("")}>
					Clear
				</Button>
			</div>

			<Table bordered hover>
				<thead>
					<tr>
						<th>
							<i className="fa-solid fa-check"></i>
						</th>
						<th>Name</th>
						<th>Mobile No.</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((user, index) => {
							return (
								<tr
									key={index}
									id={user._id}
									style={{ background: user.isPickedUp ? "#41db41" : "white" }}
								>
									<td>
										<div key="checkbox">
											<Form.Check
												className="pickup-checkbox"
												type="checkbox"
												id={user._id}
												onChange={(e) =>
													pickedup(user._id, e.target.checked, index)
												}
												checked={user.isPickedUp}
											/>
										</div>
									</td>
									<td
										onClick={(e) => pickedup(user._id, !user.isPickedUp, index)}
									>
										{user.name}
									</td>
									<td>
										<a href={`tel:` + user.mobileNo} style={{ margin: 0 }}>
											{user.mobileNo}
										</a>
									</td>
								</tr>
							);
						})}
				</tbody>
			</Table>
		</div>
	);
}
