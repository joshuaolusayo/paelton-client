const initialState = {
	allArticles: [],
	article: [],
};

export default function articleReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL":
			return {
				...state,
				allArticles: action.payload,
			};
		case "GET_ARTICLE":
			return {
				...state,
				article: action.payload,
            };
		default:
			return state;
	}
}
