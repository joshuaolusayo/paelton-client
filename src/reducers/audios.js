const initialState = {
	allAudios: [],
};

export default function audioReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL":
			return {
				...state,
				allAudios: action.payload,
			};
		default:
			return state;
	}
}
