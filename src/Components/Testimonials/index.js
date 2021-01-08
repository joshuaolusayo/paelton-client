import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Testimonies from "./Testimonies";
import ScrollToTop from "../Reusable Components/ScrollToTop";
import Footer from "../Reusable Components/Footer";

import { getAllTestimonials } from "../../actions/testimonial";
import { connect } from "react-redux";

const Testimonials = (props) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);

		props.getAllTestimonials().then(() => setLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	return !loading ? (
		<div className="hmpg testimonials">
			<HelmetProvider>
				<Helmet defer={false}>
					<title>Testimonials</title>
					<meta name="description" content="Testimonials" />
					<meta name="author" content="Ennovate Lab" />
					<meta name="keywords" content="Testimonials, S G Elton Testimonials, Testimonies about S G Elton" />
				</Helmet>
				<Header />
				<Testimonies allTestimonies={props.testimonials.data.data} />
				<Footer />
				<ScrollToTop />
			</HelmetProvider>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	testimonials: state.testimonials.allTestimonials,
});

export default connect(mapStateToProps, { getAllTestimonials })(Testimonials);
