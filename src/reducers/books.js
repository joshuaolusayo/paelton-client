const initialState = {
	allBooks: [],
	book: [],
};

export default function booksReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL":
			return {
				...state,
				allBooks: action.payload,
			};
		case "GET_BOOK":
			return {
				...state,
				book: action.payload,
			};
		default:
			return state;
	}
}
