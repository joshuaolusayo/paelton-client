import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Footer from "../Reusable Components/Footer";
import ScrollToTop from "../Reusable Components/ScrollToTop";
import Details from "./Details";
import Header from "./Header";

import { useParams } from "react-router";
import { getBook } from "../../actions/books";
import { connect } from "react-redux";

const BookDetails = (props) => {
	const { pathname } = useLocation();
	const [loading, setLoading] = useState(true);
	let params = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);

		props.getBook(params.id).then(() => setLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, loading]);

	return !loading ? (
		<div className="hmpg book-details">
			<HelmetProvider>
				<Helmet defer={false}>
					<title>{props.book.data.data.title}</title>
					<meta name="description" content={`${props.book.data.data.title} written by S G Elton`} />
					<meta name="author" content="Ennovate Lab" />
					<meta name="keywords" content={`Books, S G Elton books, ${props.book.data.data.title}`} />
				</Helmet>
				<Header data={props.book.data.data} />
				<Details data={props.book.data.data} />
				<Footer />
				<ScrollToTop />
			</HelmetProvider>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	book: state.books.book,
});

export default connect(mapStateToProps, { getBook })(BookDetails);
