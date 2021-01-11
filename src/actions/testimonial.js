import axios from "axios";

export const getAllTestimonials = () => async (dispatch) => {
	const fetch = await axios.get("https://paelton-api.herokuapp.com/api/v1/testimonials");
	return dispatch({
		type: "GET_ALL",
		payload: fetch.data,
	});
};

export const getTestimonial = (param) => async (dispatch) => {
	const fetch = await axios.get(`https://paelton-api.herokuapp.com/api/v1/testimonials/${param}`);
	return dispatch({
		type: "GET_TESTIMONIAL",
		payload: fetch.data,
	});
};
