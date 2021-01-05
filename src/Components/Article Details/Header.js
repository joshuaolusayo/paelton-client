import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";
import AOS from "aos";

const Header = (props) => {
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	}, []);

	return props.data ? (
		<header className={`header h-100 bg-pry `}>
			<div className={`container-fluid px-0 text-light ${showNav ? "style__header" : ""}`}>
				<div className="custom">
					<nav className="d-flex justify-content-between align-itmes-center">
						<Link to="/">
							<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" />
						</Link>

						<button className={`btn bg-transparent px-0 ${!showNav ? "d-block" : "d-none"}`}>
							<i className="fa fa-bars text-light hamburger" onClick={() => setShowNav(true)}></i>
						</button>
					</nav>

					<div className="abs d-flex flex-column justify-content-center">
						<h1 className="font-weight-bold mb-4" data-aos="fade-down">
							{props.data.title}
						</h1>
						<p className={`${showNav ? "d-none d-md-block" : "d-block"}`} data-aos="fade-up">
							<i className="fa fa-clock-o pr-3 text-light"></i> Reading time about 30 minutes
						</p>
					</div>
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
		</header>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

export default Header;
