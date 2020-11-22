import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Testimonies from "./Testimonies";
import ScrollToTop from "../Reusable Components/ScrollToTop";

const Testimonials = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="hmpg testimonials">
			<Header />
			<Testimonies />
			<ScrollToTop />
		</div>
	);
};

export default Testimonials;