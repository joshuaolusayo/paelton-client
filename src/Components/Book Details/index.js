import React, { useEffect, useState } from "react";
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

	console.log(props);
	return !loading ? (
		<div className="hmpg book-details">
			<Header data={props.book.data.data} />
			<Details data={props.book.data.data} />
			<Footer />
			<ScrollToTop />
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	book: state.books.book,
});

export default connect(mapStateToProps, { getBook })(BookDetails);
