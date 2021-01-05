import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
			<HelmetProvider>
				<Helmet>
					<meta name="description" content="Legacy website of S G Elton" />
					<meta name="author" content="Ennovate Lab" />
					<meta name="keywords" content="S G Elton, About S G Elton, S G Elton Legacy's website" />
				</Helmet>
				<Header />
				<Profile />
				<Cards />
				<BeParts />
				<Footer />
				<ScrollToTop />
			</HelmetProvider>
		</div>
	);
};

export default Homepage;
