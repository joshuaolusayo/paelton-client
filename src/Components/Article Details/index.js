import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Reusable Components/Footer";
import ScrollToTop from "../Reusable Components/ScrollToTop";
import Details from "./Details";
import Header from "./Header";
import ProgressBar from "../Reusable Components/ProgressBar";

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

	return !loading ? (
		<div className="hmpg article-details">
			<HelmetProvider>
				<Helmet defer={false}>
					<title>{props.article.data.data.title}</title>
					<meta name="description" content="Article" />
					<meta name="author" content="Ennovate Lab" />
					<meta
						name="keywords"
						content={`Articles, Testimonies about S G Elton, ${props.article.data.data.title}`}
					/>
				</Helmet>
				<Header data={props.article.data.data} />
				<ProgressBar />
				<Details data={props.article.data.data} />
				<Footer />
				<ScrollToTop />
			</HelmetProvider>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	article: state.articles.article,
});

export default connect(mapStateToProps, { fetchArticle })(ArticleDetails);
