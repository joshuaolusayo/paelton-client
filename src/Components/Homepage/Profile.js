import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const Profile = () => {
	useEffect(() => {
		AOS.init({
			duration: 600,
			once: true,
		});
	}, []);

	return (
		<div
			className="container-fluid mx-0 d-flex justify-content-center align-items-center profile"
			style={{ background: `url(/assets/pattern/pattern_2.svg) no-repeat 50% 20%`, backgroundSize: "cover" }}
		>
			<div className="container" data-aos="zoom-in">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<h3>Pa Elton's Profile</h3>
						<p>
							Pa Elton, as he was popularly called, left his native country, England, to come to Ilesha, Nigeria in March 1937
							in response to a divine call to be a missionary; his wife and only child, 3-year old Ruth, joining him about six
							months later. And since that time right up to his eventual home-call 50 years later, Pa Elton...{" "}
						</p>
						<Link to="/about-elton">
							<button className="btn rounded bg-sec text-light px-3 py-2 read-more">Read more</button>
						</Link>
					</div>
					<div className="col-lg-6 d-none d-lg-block">
						<div className="d-flex flex-no-wrap">
							<img className="img2" src="/assets/elton-12134738134.jpg" alt="Elton" />
							<img className="img1" src="/assets/ELTON 7.jpg" alt="Elton" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
