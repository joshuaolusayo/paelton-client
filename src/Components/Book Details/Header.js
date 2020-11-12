import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<header className="header w-100 h-100 bg-pry">
			<div className="container text-light">
				<nav className="d-flex justify-content-between align-itmes-center">
					<Link to="/">
						<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" />
					</Link>

					<button className="btn bg-transparent text-light">
						<img className="hamburger" src="/assets/hamburger.png" alt="Navbar hamburger" onClick={() => setShowNav(true)} />
					</button>
				</nav>

				<div className="abs d-flex flex-column">
					<h1 className="font-weight-bold mb-4">The Kingdom has come</h1>
					<p>
						<i className="fa fa-child pr-3"></i>Ruth Elton
					</p>
					<p>
						<i className="fa fa-copy pr-3"></i>70 pages
					</p>
				</div>

				<div className={`container bg-white text-pry p-abs ${showNav ? "d-block" : "d-none"}`}>
					<button className="btn text-pry text-right w-100 mr-auto" id="cancel" onClick={() => setShowNav(false)}>
						X
					</button>
					<div className="d-flex flex-column align-items-end top">
						<Link className="my-3" to="/">
							About SG Elton
						</Link>
						<Link className="my-3" to="/">
							Testimonials
						</Link>
						<Link className="my-3" to="/">
							Donate
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
