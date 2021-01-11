import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import ReactHtmlParser from "react-html-parser";
import { ClipLoader } from "react-spinners";
import ReadingTime from "reading-time";

const Testimonies = (props) => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	}, []);

	return props.allTestimonies.length ? (
		<div className="container my-5 my-md-8 testimonials">
			<h1 className="font-weight-bold mb-4 mb-md-5 text-center">Testimonials</h1>
			<div className="row">
				{props.allTestimonies.map((testimony) => {
					return (
						<div key={testimony._id} className="col-md-6 col-lg-4 mb-4 mb-lg-5" data-aos="fade-up">
							<Link to={`/testimony-details/${testimony._id}`}>
								<div className="card h-100">
									<div className="d-flex align-items-center flex-nowrap pt-3 px-3">
										<img className="img-fluid rounded-circle profile-pic" src={testimony.image} alt={testimony.name} />
										<h3 className="pl-2 font-weight-bold text-black mb-0">{testimony.name}</h3>
									</div>
									<div className="card-body pb-0">
										<div className="card-text text-muted">{ReactHtmlParser(testimony.testimony)}</div>
									</div>
									<div className="card-footer text-muted bg-transparent">
										<span>
											<i className="fa fa-clock-o"></i> {ReadingTime(testimony.testimony).text}
										</span>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	) : (
		<div className="my-5 text-center lead mx-auto">
			<ClipLoader color={"#0053ac"} loading />
		</div>
	);
};

export default Testimonies;
