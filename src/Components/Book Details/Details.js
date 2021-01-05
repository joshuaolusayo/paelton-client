import React, { useEffect } from "react";
import AOS from "aos";
import ReactHtmlParser from "react-html-parser";
import Books from "../Homepage/Cards/Books";

const Details = (props) => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	return props.data ? (
		<div className="container my-5 my-lg-8 details">
			<div className="row align-items-end">
				<div className="col-md-4 d-flex justify-content-center justify-content-md-auto">
					<img className="book-img" src={props.data.image} alt="The kingdome has come" />
				</div>
				<div className="col-md-8 py-3 py-md-auto">
					{ReactHtmlParser(props.data.description)}
					<a href={props.data.link} download="The kingdom has come">
						<button className="btn bg-pry text-light dwn">
							Download&nbsp;
							<span>
								<i className="fa fa-download"></i>
							</span>
						</button>
					</a>
				</div>
			</div>
			<div className="row jumbotron mt-5 bg-transparent justify-content-center justify-content-sm-start">
				<div className="col-12 border-bottom mb-5">
					<h3 className="text-sec">Other books</h3>
				</div>
				<Books />
				{/* <div className="col-sm-6 col-md-4 col-lg-3 mb-5" data-aos="fade-up">
					<Link to="/">
						<img className="book-img" src="/assets/the battle for the nations-01.jpg" alt="The battle for the nations" />
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5" data-aos="fade-up">
					<Link to="/">
						<img className="book-img" src="/assets/the kingdom has come.jpg" alt="The kingdom has come" />
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5" data-aos="fade-up">
					<Link to="/">
						<img className="book-img" src="/assets/the kingdom has come.jpg" alt="The kingdom has come" />
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5" data-aos="fade-up">
					<Link to="/">
						<img className="book-img" src="/assets/we have come to mt zion.jpg" alt="We have come to Mount Zion" />
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5" data-aos="fade-up">
					<Link to="/">
						<img className="book-img" src="/assets/we have come to mt zion.jpg" alt="We have come to Mount Zion" />
					</Link>
				</div> */}
			</div>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

export default Details;
