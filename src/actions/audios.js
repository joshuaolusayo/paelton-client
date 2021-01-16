import axios from "axios";

export const getAllAudios = () => async (dispatch) => {
	const fetch = await axios.get("https://backend.sgeltonlegacy.org/api/v1/audios");
	return dispatch({
		type: "GET_ALL",
		payload: fetch.data,
	});
};
