const initialState = {
	allBooks: [],
};

export default function booksReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL":
			return {
				...state,
				allBooks: action.payload,
			};
		default:
			return state;
	}
}
