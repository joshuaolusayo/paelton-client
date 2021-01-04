import axios from "axios";

export const getAllBooks = () => async (dispatch) => {
	const fetch = await axios.get("/data/books.json");
	return dispatch({
		type: "GET_ALL",
		payload: fetch.data,
	});
};
