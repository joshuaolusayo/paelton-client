import React from "react";
import { Link } from "react-router-dom";

const ShowNav = ({showNav, setShowNav}) => {
	return (
		<div className={`container bg-white text-pry p-abs ${showNav ? "d-block" : "d-none"}`}>
			<button className="btn text-pry text-right w-100 mr-auto" id="cancel" onClick={() => setShowNav(false)}>
				X
			</button>
			<div className="d-flex flex-column align-items-end top">
				<Link className="my-3" to="/about-elton">
					About SG Elton
				</Link>
				<Link className="my-3" to="/testimonials">
					Testimonials
				</Link>
				<Link className="my-3" to="/">
					Donate
				</Link>
			</div>
		</div>
	);
};

export default ShowNav;
