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
		<header className="header h-100">
			<div className={`container-fluid px-0 text-light text-center bg-pry ${showNav ? "style__header" : ""}`}>
				<div className="custom">
					<nav className="d-flex justify-content-between align-items-center">
						<Link to="/">
							<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" loading="lazy" />
						</Link>

						<button className={`btn bg-transparent px-0 ${!showNav ? "d-block" : "d-none"}`}>
							<i className="fa fa-bars text-light hamburger" onClick={() => setShowNav(true)}></i>
						</button>
					</nav>

					<div className="abs d-flex justify-content-between align-items-center">
						<div className="d-flex flex-column justify-content-start align-items-start">
							<h1 className="font-weight-bold" data-aos="fade-down">
								Pa Elton Profile.
							</h1>
							<p data-aos="fade-up">Written by Adeyemo Temidayo</p>
						</div>
						<img
							className={`d-none ${showNav ? "d-md-none" : "d-md-block"} eltn rounded-circle`}
							src="/assets/elton.png"
							alt="Pa Elton"
						/>
					</div>
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
		</header>
	);
};

export default Header;
