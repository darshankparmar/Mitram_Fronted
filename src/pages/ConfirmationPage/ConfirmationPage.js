/** @format */

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./ConfirmationPage.css";
import { participantsService } from "services";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
	const { state } = useLocation();
	const { data } = state ? state : {};
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState(data ? data : "");

	const search = async (event) => {
		// participantsService
		event.preventDefault();
		await participantsService.search(searchValue).then((res) => {
			const val = res.data;
			// const val = res.data.filter((user) => !user.isVerified);
			var container = document.getElementById("container-par");

			if (val.length === 0) {
				container.innerHTML =
					"<div class='text-center'><h1>NOT AVAILABLE</h1></div>";
				alert("NOT AVAILABLE");
				return false;
			}

			var ans = "";

			const l = val.length;
			for (var index = 0; index < l; index++) {
				ans +=
					`<div class="card mx-auto my-4">
				<div class="card-header d-flex justify-content-between"` +
					(val[index].isVerified
						? `style="background: green;color: white;"`
						: ``) +
					`>
					<div> 
					Name : ` +
					val[index].name +
					`</div>` +
					(val[index].isVerified
						? `<i class="fa-solid fa-check-double"></i>`
						: `<div>	
					<i id="qr-button-` +
						  index +
						  `" class="fa-solid fa-qrcode"></i>
					</div>`) +
					`</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">College ID : ` +
					val[index].collegeId +
					`</li>
					<li class="list-group-item" style="font-weight: bold; ` +
					(val[index].paymentMode === "Cash" ? `color:red` : null) +
					`">Payment : ` +
					val[index].paymentMode +
					`</li>
				</ul>
			</div>`;
			}
			container.innerHTML = ans;

			for (let index = 0; index < l; index++) {
				if (val[index].isVerified) continue;
				document.getElementById(`qr-button-${index}`).onclick = function (e) {
					const ind = e.target.id.substring(10);
					// console.log(ind);
					navigate("/pass-allo", {
						state: { collegeId: val[ind].collegeId, data: searchValue },
					});
				};
			}
		});
	};
	return (
		<div className="componentHeight">
			<Container className="search-box my-5">
				<form className="d-flex" onSubmit={search}>
					<Form.Control
						type="search"
						placeholder="Search"
						className="me-2 text-uppercase"
						aria-label="Search"
						value={searchValue}
						onChange={(e) =>
							setSearchValue(e.target.value.trim().toUpperCase())
						}
					/>
					<Button variant="outline-success" type="submit">
						Search
					</Button>
				</form>
			</Container>

			<div className="container" id="container-par"></div>
		</div>
	);
}
