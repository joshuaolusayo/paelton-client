import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const ShowNav = ({ showNav, setShowNav }) => {
	useEffect(() => {
		AOS.init({ duration: 600 });
	});
	return (
		<div className={`container bg-white text-pry p-abs nav ${showNav ? "d-block" : "d-none"}`} data-aos="slide-left">
			<button className="btn text-pry text-right w-100 mr-auto pr-0" id="cancel" onClick={() => setShowNav(false)}>
				<i className="fa fa-times text-pry"></i>
			</button>
			<div className="d-flex flex-column align-items-end top">
				<Link className="my-3 text-pry" to="/">
					Home
				</Link>
				<Link className="my-3 text-pry" to="/about-elton">
					About SG Elton
				</Link>
				<Link className="my-3 text-pry" to="/testimonials">
					Testimonials
				</Link>
				<Link className="my-3 text-pry" to="/">
					Donate
				</Link>
			</div>
		</div>
	);
};

export default ShowNav;
