import React from "react";
import Share from "../Reusable Components/Share";
import ReactHtmlParser from "react-html-parser";

const Details = (props) => {
	return props.data ? (
		<div className="container my-3 my-lg-5 details">
			<div className="row justify-content-between align-items-start">
				<div className="col-lg-5 col-xl-4">
					<Share
						tag={["Testimonies about S G Elton"]}
						img={props.image}
						title={props.title}
						intro={`This is a testimony about Pa S G Elton shared by ${props.name}`}
					/>
				</div>
				<div className="col-lg-7 col-xl-8 pl-lg-4 pl-xl-5 my-5 my-lg-auto text-muted">
					{/* <h1 className="font-weight-bold text-black mb-4">{props.data.title}</h1> */}
					{ReactHtmlParser(props.data.testimony)}
				</div>
			</div>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

export default Details;
