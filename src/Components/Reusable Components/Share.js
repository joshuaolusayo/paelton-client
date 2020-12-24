import React from "react";

const Share = () => {
	return (
		<div className="shadow rounded p-4 p-lg-5 share mt-5 mt-lg-0">
			<h2 className="font-weight-bold">Share this article</h2>
			<p className="text-muted">Share on various platforms</p>
			<div className="d-flex justify-content-between align-items-center">
				<a className="text-light rounded-circle d-inline-block" href="http://www.instagram.com" id="in">
					<i className="fa fa-instagram"></i>
				</a>
				<a className="text-light rounded-circle d-inline-block" href="http://www.facebook.com" id="fb">
					<i className="fa fa-facebook"></i>
				</a>
				<a className="text-light rounded-circle d-inline-block" href="http://www.twitter.com" id="tw">
					<i className="fa fa-twitter"></i>
				</a>
				<a className="text-light rounded-circle d-inline-block" href="http://www.whatsapp.com" id="wa">
					<i className="fa fa-whatsapp"></i>
				</a>
			</div>
		</div>
	);
};

export default Share;
