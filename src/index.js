import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import ArticleDetails from "./Components/Article Details";
import BookDetails from "./Components/Book Details";
import Homepage from "./Components/Homepage";
import PaEltonProfile from "./Components/Profile";
import Testimonials from "./Components/Testimonials";
import TestimonyDetails from "./Components/Testimony Details";

import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/book-details" component={BookDetails} />
			<Route exact path="/article-details" component={ArticleDetails} />
			<Route exact path="/about-elton" component={PaEltonProfile} />
			<Route exact path="/testimonials" component={Testimonials} />
			<Route exact path="/testimony-details" component={TestimonyDetails} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
