import { combineReducers } from "redux";

import audios from "./audios";
import articles from "./articles";
import books from "./books";
import testimonials from "./testimonials";

export default combineReducers({
	audios: audios,
	articles: articles,
	books: books,
	testimonials: testimonials,
});
