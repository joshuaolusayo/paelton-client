import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";
import AOS from "aos";

const Header = () => {
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	}, []);

	return (
		<header className="header w-100 h-100 bg-pry">
			<div className="container text-light">
				<nav className="d-flex justify-content-between align-itmes-center">
					<Link to="/">
						<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" />
					</Link>

					<button className="btn bg-transparent text-light">
						<img className="hamburger" src="/assets/hamburger.png" alt="Navbar hamburger" onClick={() => setShowNav(true)} />
					</button>
				</nav>

				<div className="abs d-flex flex-column justify-content-between h-50">
					<h1 className="font-weight-bold mb-4" data-aos="fade-down">Herald of the last days. Vol. 2</h1>
					<p data-aos="fade-up">
						<i className="fa fa-clock-o pr-3 text-light"></i> Reading time about 30 minutes
					</p>
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
		</header>
	);
};

export default Header;
