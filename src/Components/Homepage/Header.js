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
		<header className="header mb-5">
			<div className={`container-fluid px-0 text-light text-center bg-pry ${showNav ? "style__header hm" : ""}`}>
				<div className="custom">
					<nav className="d-flex justify-content-between align-itmes-center">
						<Link to="/">
							<img className="elt" src="/assets/sg_elton_white-06.png" alt="S G Elton" />
						</Link>

						<button className={`btn bg-transparent px-0 ${!showNav ? "d-block" : "d-none"}`}>
							<i className="fa fa-bars text-light hamburger" onClick={() => setShowNav(true)}></i>
						</button>
					</nav>

					<div
						className={`abs d-flex flex-column justify-content-center ${showNav ? "align-items-start" : "align-items-center"}`}
					>
						<h1 className={`font-weight-bold ${showNav ? "text-left" : ""}`} data-aos="fade-down">
							Explore all the messages of S G Elton provided for free.
						</h1>
						<a href="#explore" className="btn bg-outline-pry px-5 py-2 shadow mt-3 mt-md-5" data-aos="fade-up">
							Explore
						</a>
					</div>
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
			<img className={`wave w-100 mt-n1 ${showNav ? "d-none" : "d-inline-block"}`} src="./assets/bg_wave.png" alt="Wave" />
		</header>
	);
};

export default Header;
