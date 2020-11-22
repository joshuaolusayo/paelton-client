import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";
import AOS from "aos";

const Header = () => {
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});
	return (
		<header className="header w-100 h-100 bg-pry">
			<div className="container text-light">
				<nav className="d-flex justify-content-between align-items-center">
					<Link to="/">
						<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" loading="lazy" />
					</Link>

					<button className="btn bg-transparent text-light">
						<img className="hamburger" src="/assets/hamburger.png" alt="Navbar hamburger" onClick={() => setShowNav(true)} />
					</button>
				</nav>

				<div className="abs">
					<div className="d-flex flex-column justify-content-start align-items-start col-md-8">
						<h1 className="font-weight-bold" data-aos="fade-down">Testimonials.</h1>
						<p data-aos="fade-up">
							Men of God speak about the influence of Pa S G Elton. (Excerpts from Essence Restored Magazine maiden edition
							(2004))
						</p>
					</div>
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
		</header>
	);
};

export default Header;