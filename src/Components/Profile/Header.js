import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowNav from "../Reusable Components/ShowNav";

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<header
			className="header w-100 h-100"
			style={{ background: `url("/assets/pattern/pattern_1.svg") no-repeat 50% 10%`, backgroundSize: "cover" }}
		>
			<div className="container text-light text-center">
				<nav className="d-flex justify-content-between align-items-center">
					<Link to="/">
						<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" loading="lazy" />
					</Link>

					<button className="btn bg-transparent text-light">
						<img className="hamburger" src="/assets/hamburger.png" alt="Navbar hamburger" onClick={() => setShowNav(true)} />
					</button>
				</nav>

				<div className="abs d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column justify-content-start align-items-start">
						<h1 className="font-weight-bold">Pa Elton Profile.</h1>
						<p>Written by Adeyemo Temidayo</p>
					</div>
					<img className="d-none d-md-block eltn rounded-circle" src="/assets/elton.png" alt="Pa Elton" />
				</div>

				<ShowNav showNav={showNav} setShowNav={setShowNav} />
			</div>
		</header>
	);
};

export default Header;
