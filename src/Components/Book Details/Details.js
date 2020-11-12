import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
	return (
		<div className="container py-5 details">
			<div className="row align-items-end">
				<div className="col-md-4 d-flex justify-content-center justify-content-md-auto">
					<img className="book-img" src="/assets/the kingdom has come.jpg" alt="The kingdome has come" />
				</div>
				<div className="col-md-8 py-3 py-md-auto">
					<p>
						This book came by divine inspiration and vividly describes events which will characterize the coming Kingdom age.
						When thinking of our glorious future as believers, we are to do so in terms of the Kingdom of Heaven coming to
						residence on earth.
					</p>
					<button className="btn bg-pry text-light dwn">
						Download&nbsp;
						<span>
							<i className="fa fa-download"></i>
						</span>
					</button>
				</div>
			</div>
			<div className="row jumbotron mt-5 bg-transparent justify-content-center justify-content-sm-start">
				<div className="col-12 border-bottom mb-5">
					<h3 className="text-sec">Other books</h3>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5">
					<Link to="/">
						<img className="book-img" src="/assets/the battle for the nations-01.jpg" alt="The battle for the nations" />
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5">
					<Link to="/">
						<img className="book-img" src="/assets/the kingdom has come.jpg" alt="The kingdom has come" />
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5">
					<Link to="/">
						<img className="book-img" src="/assets/the kingdom has come.jpg" alt="The kingdom has come" />
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5">
					<Link to="/">
						<img className="book-img" src="/assets/we have come to mt zion.jpg" alt="We have come to Mount Zion" />
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-5">
					<Link to="/">
						<img className="book-img" src="/assets/we have come to mt zion.jpg" alt="We have come to Mount Zion" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Details;
