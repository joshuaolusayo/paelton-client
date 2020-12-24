import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const Articles = () => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	return (
		<div className="container articles">
			<div className="row">
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<Link to="/article-details">
						<div className="card bg-light border-0 shadow h-100">
							<img
								className="card-img-top"
								src="/assets/Herald of the last days. Vol. 1.jpg"
								alt="Herald of the last days. Vol. 1"
								loading="lazy"
							/>
							<div className="card-body p-4">
								<h5 className="card-title text-black">Herald of the last days. Vol. 1</h5>
								<p className="card-text text-muted">
									<i className="fa fa-clock-o"></i> Reading time about 30 minutes
								</p>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<Link to="/article-details">
						<div className="card bg-light border-0 shadow h-100">
							<img
								className="card-img-top"
								src="/assets/Herald of the last days. Vol. 2.jpg"
								alt="Herald of the last days. Vol. 2"
								loading="lazy"
							/>
							<div className="card-body p-4">
								<h5 className="card-title text-black">Herald of the last days. Vol. 2</h5>
								<p className="card-text text-muted">
									<i className="fa fa-clock-o"></i> Reading time about 30 minutes
								</p>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<Link to="/article-details">
						<div className="card bg-light border-0 shadow h-100">
							<img
								className="card-img-top"
								src="/assets/Herald of the last days. Vol. 3.jpg"
								alt="Herald of the last days. Vol. 3"
								loading="lazy"
							/>
							<div className="card-body p-4">
								<h5 className="card-title text-black">Herald of the last days. Vol. 3</h5>
								<p className="card-text text-muted">
									<i className="fa fa-clock-o"></i> Reading time about 30 minutes
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Articles;
