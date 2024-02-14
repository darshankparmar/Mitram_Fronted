/** @format */

import { handleResponse } from "helpers";
import axios from "axios";
import authenticationService from "./authentication.service";
const participantsService = {
	register,
	registerFailed,
    pay,
    payCheck,
	search,
	assignQR,
	check,
	getPickUp,
	updatePickUp,
	getIn
};

async function getIn(id) {
	return await axios.put('/participants/getIN',{id}).catch(handleResponse).then(res => res.data);
}

async function assignQR(collegeId,QRId) {
	console.log(authenticationService.currentUserValue.id);
	return axios
		.post(`/participants/assign`, {
			collegeId,
			QRId,
			userId: authenticationService.currentUserValue.id,
		})
		.catch(handleResponse)
		.then((res) => {
			return res;
		});
}

async function check(QRId) {
	return axios.get(`/QRCode?QRId=${QRId}`).catch(handleResponse).then((res) => res);
}

async function search(searchVal) {
	return axios.get(`/participants/search?val=${searchVal}`).catch(handleResponse).then((res) => {
		// console.log(res);
		return res;
	});	
}

async function payCheck(txn_id,date) {
	return axios
		.post("/participants/payCheck", {"client_txn_id":txn_id})
		.catch(handleResponse)
		.then((res) => res);
}

async function pay(payload) {


	return axios
		.post("/participants/pay", payload)
		.catch(handleResponse)
		.then((res) => res.data);
}


async function registerFailed(participants) {
	return axios
		.post("/participants/registerFailed", { users: participants })
		.catch(handleResponse)
		.then((res) => {
			return "Added";
		});
}

async function register(participants) {

	
	return axios
		.post("/participants/register", { users: participants })
		.catch(handleResponse)
		.then((res) => {
			return "Added";
		});
}

async function getPickUp(pickUpPoint) {
	
	const points = {"NA":0,"vaniyavad":1,"dominos":2,"ayurvedic":3,"sudarshan":4}

	return axios
		.get(`/participants/pickUp?point=${points[pickUpPoint]}`)
		.catch(handleResponse)
		.then((res) => {
			return res.data;
		});
}


async function updatePickUp(id,isPickedUp) {
	
	return axios
		.put(`/participants/pickUp`,{id,isPickedUp})
		.catch(handleResponse)
		.then((res) => {
			return res.data;
		});
}

export default participantsService;
