import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const Books = () => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<Link to="/book-details">
						<div className="card bg-light border-0 shadow">
							<img
								className="card-img-top"
								src="/assets/the battle for the nations-01.jpg"
								alt="The battle for the nations"
								loading="lazy"
							/>
						</div>
					</Link>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<Link to="/book-details">
						<div className="card bg-light border-0 shadow">
							<img
								className="card-img-top"
								src="/assets/the kingdom has come.jpg"
								alt="The Kingdom has come"
								loading="lazy"
							/>
						</div>
					</Link>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<Link to="/book-details">
						<div className="card bg-light border-0 shadow">
							<img
								className="card-img-top"
								src="/assets/we have come to mt zion.jpg"
								alt="We have come to Mount Zion"
								loading="lazy"
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Books;
