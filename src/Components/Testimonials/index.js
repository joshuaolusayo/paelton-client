import React from "react";
import Header from "./Header";
import Testimonies from "./Testimonies";
import ScrollToTop from "../Reusable Components/ScrollToTop";

const Testimonials = () => {
	return (
		<div className="hmpg testimonials">
			<Header />
			<Testimonies />
			<ScrollToTop />
		</div>
	);
};

export default Testimonials;
