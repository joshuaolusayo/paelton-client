import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../Reusable Components/ScrollToTop";
import Details from "./Details";
import Header from "./Header";

const TestimonyDetails = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="hmpg testimony-details">
			<Header />
			<Details />
			<ScrollToTop />
		</div>
	);
};

export default TestimonyDetails;