import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BeParts from "../Reusable Components/BePartOfThis";
import Cards from "./Cards";
import Profile from "./Profile";
import Footer from "../Reusable Components/Footer";
import Header from "./Header";
import ScrollToTop from "../Reusable Components/ScrollToTop";

const Homepage = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="hmpg">
			<Header />
			<Profile />
			<Cards />
			<BeParts />
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Homepage;
