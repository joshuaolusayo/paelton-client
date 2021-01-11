import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import ArticleDetails from "./Components/Article Details";
import BookDetails from "./Components/Book Details";
import Homepage from "./Components/Homepage";
import PaEltonProfile from "./Components/Profile";
import Testimonials from "./Components/Testimonials";
import TestimonyDetails from "./Components/Testimony Details";

import "aos/dist/aos.css";
import "./styles.css";

// Redux setup
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/book-details/:id" component={BookDetails} />
				<Route exact path="/article-details/:id" component={ArticleDetails} />
				<Route exact path="/about-elton" component={PaEltonProfile} />
				<Route exact path="/testimonials" component={Testimonials} />
				<Route exact path="/testimony-details/:id" component={TestimonyDetails} />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
