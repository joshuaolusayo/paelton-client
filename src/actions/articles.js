import axios from "axios";

export const getAllArticles = () => async (dispatch) => {
	// const fetch = await axios.get("https://paelton-api.herokuapp.com/api/v1/articles");
	const fetch = await axios.get(`/data/articles.json`);
	return dispatch({
		type: "GET_ALL",
		payload: fetch.data,
	});
};

export const fetchArticle = (param) => async (dispatch) => {
	const fetch = await axios.get(`https://paelton-api.herokuapp.com/api/v1/articles/${param}`);
	return dispatch({
		type: "GET_ARTICLE",
		payload: fetch.data
	})
};
