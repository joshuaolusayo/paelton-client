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
				<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.6694 13.4981L26.3351 3.85353C26.7584 3.4302 26.9962 2.85603 26.9962 2.25735C26.9962 1.65866 26.7584 1.0845 26.3351 0.661161C25.9118 0.237827 25.3377 0 24.7391 0C24.1405 0 23.5665 0.237827 23.1432 0.661161L13.5 10.3282L3.85682 0.661161C3.43354 0.237827 2.85946 -4.46055e-09 2.26086 0C1.66226 4.46056e-09 1.08818 0.237827 0.664904 0.661161C0.241629 1.0845 0.00383615 1.65866 0.00383614 2.25735C0.00383614 2.85603 0.241629 3.4302 0.664904 3.85353L10.3306 13.4981L0.664904 23.1426C0.454218 23.3516 0.286993 23.6003 0.172874 23.8742C0.0587548 24.1482 0 24.442 0 24.7388C0 25.0356 0.0587548 25.3294 0.172874 25.6034C0.286993 25.8774 0.454218 26.126 0.664904 26.335C0.873868 26.5457 1.12248 26.713 1.3964 26.8271C1.67032 26.9412 1.96412 27 2.26086 27C2.5576 27 2.85141 26.9412 3.12532 26.8271C3.39924 26.713 3.64785 26.5457 3.85682 26.335L13.5 16.668L23.1432 26.335C23.3521 26.5457 23.6008 26.713 23.8747 26.8271C24.1486 26.9412 24.4424 27 24.7391 27C25.0359 27 25.3297 26.9412 25.6036 26.8271C25.8775 26.713 26.1261 26.5457 26.3351 26.335C26.5458 26.126 26.713 25.8774 26.8271 25.6034C26.9412 25.3294 27 25.0356 27 24.7388C27 24.442 26.9412 24.1482 26.8271 23.8742C26.713 23.6003 26.5458 23.3516 26.3351 23.1426L16.6694 13.4981Z"
						fill="#0053AC"
					/>
				</svg>
			</button>
			<div className="d-flex flex-column align-items-end top">
				<Link className="my-3 text-pry" to="/">
					Home
				</Link>
				<a href="https://paystack.com/pay/2x6er1w-f9" className="my-3 text-pry" target="_blank" rel="nofollow noreferrer">
					Donate
				</a>
				<Link className="my-3 text-pry" to="/testimonials">
					Testimonials
				</Link>
				<Link className="my-3 text-pry" to="/about-elton">
					About SG Elton
				</Link>
			</div>
		</div>
	);
};

export default ShowNav;
