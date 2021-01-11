import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";

const Header = (props) => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	const [showNav, setShowNav] = useState(false);

	return props.data ? (
		<header className={`header h-100 bg-pry ${showNav ? "style__header" : ""}`}>
			<div
				className={`container-fluid px-0 text-light text-center bg-pry ${showNav ? "style__header" : ""}`}
				style={{ backgroundImage: "url(/assets/rect.png)" }}
			>
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

					<div className="abs">
						<div
							className={`d-flex flex-column justify-content-center align-items-start h-100 ${
								showNav ? "" : "col-md-8 pl-0"
							}`}
						>
							<h1 className="font-weight-bold text-left" data-aos="fade-down">
								{props.data.name}
							</h1>
							<p className={`my-3 my-md-3 text-left ${showNav ? "d-none d-md-block" : ""}`} data-aos="fade-up">
								{props.data.title}
							</p>
							<span data-aos="fade-up">
								<i className="fa fa-clock-o"></i> 17 mins read
							</span>
						</div>
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
