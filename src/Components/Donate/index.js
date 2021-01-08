import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Reusable Components/Footer";
import ScrollToTop from "../Reusable Components/ScrollToTop";
import Details from "./Details";
import Header from "./Header";

const Donate = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="hmpg donate">
			<HelmetProvider>
				<Helmet>
					<title>Donate</title>
					<meta name="description" content="Donate" />
					<meta name="author" content="Ennovate Lab" />
					<meta name="keywords" content="S G Elton, About S G Elton, S G Elton Legacy's website, Donate" />
				</Helmet>
				<Header />
				<Details />
				<Footer />
				<ScrollToTop />
			</HelmetProvider>
		</div>
	);
};

export default Donate;
