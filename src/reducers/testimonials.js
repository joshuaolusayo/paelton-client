const initialState = {
	allTestimonials: [],
	testimonial: [],
};

export default function testimonialReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL":
			return {
				...state,
				allTestimonials: action.payload,
			};
		case "GET_TESTIMONIAL":
			return {
				...state,
				testimonial: action.payload,
			};
		default:
			return state;
	}
}
