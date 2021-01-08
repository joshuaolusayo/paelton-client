import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Reusable Components/Footer";
import ScrollToTop from "../Reusable Components/ScrollToTop";
import Details from "./Details";
import Header from "./Header";
import ProgressBar from "../Reusable Components/ProgressBar";

const PaEltonProfile = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="hmpg about-elton">
			<HelmetProvider>
				<Helmet>
					<title>About S G Elton</title>
					<meta name="description" content="About S G Elton" />
					<meta name="author" content="Ennovate Lab" />
					<meta name="keywords" content="S G Elton, About S G Elton, S G Elton Legacy's website" />
				</Helmet>
				<Header />
				<ProgressBar />
				<Details />
				<Footer />
				<ScrollToTop />
			</HelmetProvider>
		</div>
	);
};

export default PaEltonProfile;
