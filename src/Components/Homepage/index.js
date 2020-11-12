import React from "react";
import BeParts from "../Reusable Components/BePartOfThis";
import Cards from "./Cards";
import Profile from "./Profile";
import Footer from "../Reusable Components/Footer";
import Header from "./Header";
import ScrollToTop from "../Reusable Components/ScrollToTop";

const Homepage = () => {
	return (
		<div className="hmpg">
			<Header />
			<Cards />
			<Profile />
			<BeParts />
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Homepage;
