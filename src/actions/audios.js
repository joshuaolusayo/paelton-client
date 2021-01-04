import axios from "axios";

export const getAllAudios = () => async (dispatch) => {
	// const fetch = await axios.get("https://paelton-api.herokuapp.com/api/v1/audios");
	const fetch = await axios.get("/data/audios.json");
	return dispatch({
		type: "GET_ALL",
		payload: fetch.data,
	});
};

// export const getNext = (param) => async (dispatch) => {
    // const fetch = awa
// }