import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<header
			className="header w-100 h-100"
			style={{ background: `url("/assets/pattern/pattern_1.svg") no-repeat 50% 100%`, backgroundSize: "cover" }}
		>
			<div className="container text-light text-center">
				<nav className="d-flex justify-content-between align-itmes-center">
					<Link to="/">
						<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" />
					</Link>

					<button className="btn bg-transparent text-light">
						<img className="hamburger" src="/assets/hamburger.png" alt="Navbar hamburger" onClick={() => setShowNav(true)} />
					</button>
				</nav>

				<div className="abs d-flex flex-column justify-content-center align-items-center">
					<h1 className="font-weight-bold">Explore all the messages of S G Elton provided for free.</h1>
					<button className="btn bg-outline-pry px-5 py-2 shadow mt-3 mt-md-5">Explore</button>
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
		</header>
	);
};

export default Header;
