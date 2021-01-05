import React from "react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";

const Share = ({ tag = "", title, img, intro }) => {
	const param = {
		url: window.location.href, // to share current page
		title: { title },
		shareImage: { img },
	};

	return (
		<div className="shadow rounded p-4 p-lg-5 share mt-5 mt-lg-0">
			<h2 className="font-weight-bold">Share this article</h2>
			<p className="text-muted">Share on various platforms</p>
			<div className="d-flex justify-content-between align-items-center w-100">
				<LinkedinShareButton url={param.url} title={title} summary={intro} source={param.url} target="_blank" rel="noreferrer">
					<div className="text-light rounded-circle d-inline-block" id="ln">
						<i className="fa fa-linkedin"></i>
					</div>
				</LinkedinShareButton>

				<FacebookShareButton url={param.url} quote={title} hashtag={tag} target="_blank" rel="noreferrer">
					<div className="text-light rounded-circle d-inline-block" id="fb">
						<i className="fa fa-facebook"></i>
					</div>
				</FacebookShareButton>

				<TwitterShareButton url={param.url} title={title} target="_blank" rel="noreferrer">
					<div className="text-light rounded-circle d-inline-block" id="tw">
						<i className="fa fa-twitter"></i>
					</div>
				</TwitterShareButton>

				<WhatsappShareButton url={param.url} title={title} target="_blank" rel="noreferrer">
					<div className="text-light rounded-circle d-inline-block" id="wa">
						<i className="fa fa-whatsapp"></i>
					</div>
				</WhatsappShareButton>
			</div>
		</div>
	);
};

export default Share;
