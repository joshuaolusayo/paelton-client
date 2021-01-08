import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="container-fluid bg-black py-5 py-lg-6 footer">
				<div className="container">
					<div className="row align-items-stretch justify-content-between">
						<div className="col-lg-6 d-flex flex-column mt-5 mt-lg-0">
							<div>
								<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" />
							</div>
							<p className="text-muted mb-0 mt-5">Copyright &copy; 2020. All rights reserved.</p>
						</div>
						<div className="col-lg-3 d-flex flex-column mt-5 mt-lg-0">
							<h3 className="text-light mb-5">Quick Links</h3>
							<Link to="/" className="text-muted">
								Home
							</Link>
							<Link to="/about-elton" className="text-muted mt-3">
								About SG Elton
							</Link>
							<Link to="/testimonials" className="text-muted mt-3">
								Testimonials
							</Link>
							<Link to="/" className="text-muted mt-3">
								Donate
							</Link>
						</div>
						<div className="col-lg-3 d-flex flex-column my-5 my-lg-0">
							<h3 className="text-light mb-5">Contact Us</h3>
							<a className="text-muted py-1 py-lg-auto" href="tel:+234 803 854 8073">
								+234 803 854 8073
							</a>
							<a className="text-sec py-1 py-lg-auto mt-3" href="mailto:info@sgelton.com">
								info@sgelton.com
							</a>
							<span className="text-muted py-1 py-lg-auto mt-3">
								New Nation Center, New Market, OAU, Ile-Ife, Osun State, Nigeria.
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black">
				<hr className="rule my-0" />
				<p className="text-light text-center py-5 my-0">
					Made with <i className="fa fa-heart text-sec"></i> by{" "}
					<a className="text-light" href="http://www.ennnovatelab.com">
						Ennovate Lab
					</a>
				</p>
			</div>
		</>
	);
};

export default Footer;
