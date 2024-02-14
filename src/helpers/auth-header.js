/** @format */

import  {authenticationService}  from "services";


export function authHeader() {
	// return authorization header with jwt token
	const currentUser = authenticationService.currentUserValue;

	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",

		"Access-Control-Allow-Headers": "*",
		"Access-Control-Allow-Methods": "*",
	};
	if (currentUser && currentUser.token) 
		headers["Authorization"] = `Bearer ${currentUser.token}`;
	
	return headers;
}
