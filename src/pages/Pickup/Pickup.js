/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { participantsService } from "services";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "./Pickup.css";

export default function Pickup() {
	const [pickUp, setPickUp] = useState({});

	useEffect(() => {
		const loadData = async () => {
			pickUp.Vaniyavad = 0;
			pickUp.Dominos = 0;
			pickUp.Ayurvedic = 0;
			pickUp.Sudarshan = 0;

			participantsService.getPickUp("NA").then(async (datas) => {
				
				setPickUp(datas)
			});
		};
		loadData();
	// eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
	}, []);

	return (
		<div className="pickup componentHeight d-flex justify-content-center">
			<div className="location-list my-5" style={{ width: "350px" }}>
				<ListGroup as="ol">
					<Link to="/pickup/vaniyavad">
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
					</Link>
					<Link to="/pickup/dominos">
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
					</Link>
					<Link to="/pickup/ayurvedic">
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
					</Link>
					<Link to="/pickup/sudarshan">
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
					</Link>
				</ListGroup>
			</div>
		</div>
	);
}
