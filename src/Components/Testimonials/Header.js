import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<header
			className="header w-100 h-100 bg-pry"
			// style={{ background: `url("/assets/pattern/pattern_1.svg") no-repeat 50% 10%`, backgroundSize: "cover" }}
		>
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
						<h1 className="font-weight-bold">Testimonials.</h1>
						<p>
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
