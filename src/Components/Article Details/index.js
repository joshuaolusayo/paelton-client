import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Reusable Components/Footer";
import ScrollToTop from "../Reusable Components/ScrollToTop";
import Details from "./Details";
import Header from "./Header";

import { useParams } from "react-router";
import { fetchArticle } from "../../actions/articles";
import { connect } from "react-redux";

const ArticleDetails = (props) => {
	const { pathname } = useLocation();
	const [loading, setLoading] = useState(true);
	let params = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);

		props.fetchArticle(params.id).then(() => setLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, loading]);

	// console.log(props);
	return !loading ? (
		<div className="hmpg article-details">
			<Header data={props.article.data.data} />
			<Details data={props.article.data.data} />
			<Footer />
			<ScrollToTop />
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	article: state.articles.article,
});

export default connect(mapStateToProps, { fetchArticle })(ArticleDetails);
