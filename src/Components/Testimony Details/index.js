import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Reusable Components/Footer";
import ScrollToTop from "../Reusable Components/ScrollToTop";
import Details from "./Details";
import Header from "./Header";

import { useParams } from "react-router";
import { getTestimonial } from "../../actions/testimonial";
import { connect } from "react-redux";

const TestimonyDetails = (props) => {
	const { pathname } = useLocation();
	const [loading, setLoading] = useState(true);
	let params = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);

		props.getTestimonial(params.id).then(() => setLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, loading]);

	return !loading ? (
		<div className="hmpg testimony-details">
			<HelmetProvider>
				<Helmet>
					<title>Testimonials</title>
					<meta name="description" content="Testimonials" />
					<meta name="author" content="Ennovate Lab" />
					<meta
						name="keywords"
						content={`Testimonials, S G Elton Testimonials, Testimonies about S G Elton, ${props.testimonial.data.data.name} testimony`}
					/>
				</Helmet>
				<Header data={props.testimonial.data.data} />
				<Details data={props.testimonial.data.data} />
				<Footer />
				<ScrollToTop />
			</HelmetProvider>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	testimonial: state.testimonials.testimonial,
});

export default connect(mapStateToProps, { getTestimonial })(TestimonyDetails);
