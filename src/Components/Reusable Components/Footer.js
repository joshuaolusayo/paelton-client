import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="container-fluid bg-black py-5">
			<div className="container">
				<div className="row align-items-stretch justify-content-between">
					<div className="col-lg-6 d-flex flex-column justify-content-between mt-5 mt-lg-0">
						<div>
							<img className="elt" src="/assets/sg_elton_white-06.png" alt="Pa S G Elton" />
							<p className="text-light">
								Made with <i className="fa fa-heart text-sec"></i> by{" "}
								<a className="text-light" href="http://www.ennnovatelab.com">
									Ennovate Lab
								</a>
							</p>
						</div>
						<p className="text-muted mb-0">Copyright &copy; 2020. All rights reserved.</p>
					</div>
					<div className="col-lg-3 d-flex flex-column justify-content-between mt-5 mt-lg-0">
						<h3 className="text-light">Quick Links</h3>
						<Link to="/" className="text-muted mt-3">About SG Elton</Link>
						<Link to="/" className="text-muted mt-3">Testimonials</Link>
						<Link to="/" className="text-muted mt-3">Resources</Link>
						<Link to="/" className="text-muted mt-3">Donate</Link>
					</div>
					<div className="col-lg-3 d-flex flex-column justify-content-between my-5 mt-lg-0">
						<h3 className="text-light">Contact Us</h3>
						<a className="text-muted py-1 py-lg-auto" href="tel:+234 803 854 8073">
							+234 803 854 8073
						</a>
						<a className="text-warning py-1 py-lg-auto" href="mailto:info@sgelton.com">
							info@sgelton.com
						</a>
						<span className="text-muted py-1 py-lg-auto">New nation center, New Market, OAU, Ile-Ife, Osun state, Nigeria</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;