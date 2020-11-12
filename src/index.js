import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import ArticleDetails from "./Components/Article Details";
import BookDetails from "./Components/Book Details";
import Homepage from "./Components/Homepage";

import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/book-details" component={BookDetails} />
			<Route exact path="/article-details" component={ArticleDetails} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
