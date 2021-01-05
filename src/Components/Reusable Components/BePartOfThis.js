import React from "react";
import { Link } from "react-router-dom";

const BeParts = () => {
	return (
		<div className="jumbotron container be-parts bg-pry text-light text-center my-5 my-md-8">
			<div className="col-md-8 mx-auto">
				<h3>Be a part of this.</h3>
				<p className="mt-4 mb-5">
					Your donation helps to propagate the Kingdom gospel through the production and distribution of not-for-sale pamphlets
					and booklets in different languages. God bless.
				</p>
				<Link to="/">
					<button className="btn px-5 py-2 shadow bg-outline-pry text-uppercase">Give to the cause</button>
				</Link>
			</div>
		</div>
	);
};

export default BeParts;
