import React from "react";
import { Link } from "react-router-dom";

const BeParts = () => {
	return (
		<div className="jumbotron container be-parts bg-pry text-light text-center mb-5">
			<div className="col-md-8 mx-auto">
				<h3>Be a part of this.</h3>
				<p className="my-4">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
					layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
					'Content here, content here', making it look like readable English.{" "}
				</p>
				<Link to="/">
					<button className="btn px-5 py-2 shadow bg-outline-pry">Give to the course</button>
				</Link>
			</div>
		</div>
	);
};

export default BeParts;
