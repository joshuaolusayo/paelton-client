import axios from "axios";

export const getAllBooks = () => async (dispatch) => {
	const fetch = await axios.get("https://paelton-api.herokuapp.com/api/v1/books");
	return dispatch({
		type: "GET_ALL",
		payload: fetch.data,
	});
};

export const getBook = (param) => async (dispatch) => {
	const fetch = await axios.get(`https://paelton-api.herokuapp.com/api/v1/books/${param}`);
	return dispatch({
		type: "GET_BOOK",
		payload: fetch.data,
	});
};
