import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";

const Header = () => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	const [showNav, setShowNav] = useState(false);
	return (
		<header className={`header h-100 bg-pry ${showNav ? "style__header" : ""}`}>
			<div className="container text-light">
				<nav className="d-flex justify-content-between align-items-center">
					<Link to="/">
						<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" loading="lazy" />
					</Link>

					<button className={`btn bg-transparent ${!showNav ? "d-block" : "d-none"}`}>
						<i className="fa fa-bars text-light hamburger" onClick={() => setShowNav(true)}></i>
					</button>
				</nav>

				<div className="abs">
					<div className="d-flex flex-column justify-content-start align-items-start col-md-8">
						<h1 className="font-weight-bold" data-aos="fade-down">
							Revd. Emiko Amotsuka
						</h1>
						<p className="my-3 my-md-3" data-aos="fade-up">
							Former President, Ibadan Varsity Christian Union (IVCU, 1975/76), President Koinonia Ministries, Ibadan, Nigeria
						</p>
						<span data-aos="fade-up">
							<i className="fa fa-clock-o"></i> 17 mins read
						</span>
					</div>
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
		</header>
	);
};

export default Header;
