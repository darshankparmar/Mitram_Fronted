/** @format */

import { BehaviorSubject } from "rxjs";

import { handleResponse } from "helpers";
import axios from "axios";

const currentUserSubject = new BehaviorSubject(
	JSON.parse(localStorage.getItem("currentUser")),
);

const authenticationService = {
	login,
	logout,
	register,
	currentUser: currentUserSubject.asObservable(),
	get currentUserValue() {
		return currentUserSubject.value;
	},
	getUsers,
	getUserInfo,
};

async function getUsers() {
	return (await axios.get("/users/")).data;
}

async function getUserInfo(id) {
	return (await axios.get(`/users/details?id=${id}`)).data;
}

async function login(username, password) {
	// console.log(username);
	return axios
		.post("users/authenticate", { username, password })
		.catch(handleResponse)
		.then((response) => {
			// console.log(response);
			if (response.data.message) {
				alert(response.data.message);
				return;
			}
			const data = JSON.stringify(response.data);

			// console.log(data);
			localStorage.setItem("currentUser", data);
			currentUserSubject.next(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject(error);
		});
}
async function register(user) {
	console.log(user);
	return axios
		.post("users/register", user, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.catch(handleResponse);
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem("currentUser");
	currentUserSubject.next(null);
}

export default authenticationService;
