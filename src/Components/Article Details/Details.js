import React from "react";
// import { Link } from "react-router-dom";
import Articles from "../Homepage/Cards/Articles";
import Share from "../Reusable Components/Share";
// import ProgressBar from "../Reusable Components/ProgressBar";

const Details = (props) => {
	return props.data ? (
		<div className="container my-5 my-lg-8 details">
			<div className="row justify-content-between align-items-start">
				<div className="col-md-5 col-xl-4">
					<Share />
				</div>
				<div className="col-md-7 col-xl-8 pl-lg-4 pl-xl-5 my-5 my-lg-0 text-muted">{props.data.content}</div>
			</div>
			<div className="row my-5 my-md-6 my-lg-8 other-articles">
				<div className="col-12 border-bottom mb-5">
					<h3 className="font-weight-bold">Other articles</h3>
				</div>
				<Articles />
			</div>
		</div>
	) : (
		<div className="my-5 text-center">Loading...</div>
	);
};

export default Details;
