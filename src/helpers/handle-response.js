/** @format */


export function handleResponse(err) {
	console.log(err);
	const response = err.response;
	const data = response.data;

	return Promise.reject(data);
}
