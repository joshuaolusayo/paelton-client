import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";
import AOS from "aos";

const Header = (props) => {
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	return props.data ? (
		<header className={`header h-100 `}>
			<div className={`container-fluid px-0 text-light ${showNav ? "style__header" : ""}`}>
				<div className="custom">
					<nav className="d-flex justify-content-between align-itmes-center">
						<Link to="/">
							<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" />
						</Link>

						<button className={`btn bg-transparent px-0 ${!showNav ? "d-block" : "d-none"}`} onClick={() => setShowNav(true)}>
							<svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="8" width="34" height="3" rx="1.5" fill="white" />
								<rect y="11" width="42" height="3" rx="1.5" fill="white" />
								<rect x="5" y="21" width="37" height="3" rx="1.5" fill="white" />
							</svg>
						</button>
					</nav>

					<div className="abs d-flex flex-column justify-content-center">
						<h1 className="font-weight-bold mb-4" data-aos="fade-down">
							{props.data.title}
						</h1>
						<p data-aos="fade-up">
							<i className="fa fa-child pr-3"></i>{props.data.author}
						</p>
						<p data-aos="fade-up">
							<i className="fa fa-copy pr-3"></i>70 pages
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
