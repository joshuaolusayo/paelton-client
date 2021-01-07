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
		<header className="header h-100">
			<div className={`container-fluid px-0 text-light text-center bg-pry ${showNav ? "style__header" : ""}`}>
				<div className="custom">
					<nav className="d-flex justify-content-between align-items-center">
						<Link to="/">
							<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" loading="lazy" />
						</Link>

						<button className={`btn bg-transparent px-0 ${!showNav ? "d-block" : "d-none"}`} onClick={() => setShowNav(true)}>
							<svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="8" width="34" height="3" rx="1.5" fill="white" />
								<rect y="11" width="42" height="3" rx="1.5" fill="white" />
								<rect x="5" y="21" width="37" height="3" rx="1.5" fill="white" />
							</svg>
						</button>
					</nav>

					<div className="abs tt">
						<div className="d-flex flex-column h-100 justify-content-center align-items-start col-md-8 px-0">
							<h1 className="font-weight-bold" data-aos="fade-down">
								Testimonials.
							</h1>
							<p className="text-left" data-aos="fade-up">
								Men of God speak about the influence of Pa S G Elton. (Excerpts from Essence Restored Magazine maiden
								edition (2004))
							</p>
						</div>
					</div>
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
		</header>
	);
};

export default Header;
