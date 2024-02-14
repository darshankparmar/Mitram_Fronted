/** @format */

import { handleResponse } from "helpers";
import axios from "axios";

const contactService = {
	create,
};

async function create(participants) {
	return axios
		.post("/contactus/register", participants)
		.catch(handleResponse)
		.then((res) => {
			return "Added";
		});
}

export default contactService;
