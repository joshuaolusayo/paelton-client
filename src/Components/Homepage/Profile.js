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
		<div className="profile__elton my-5 my-lg-8">
			<img className="w-100 wave d-none d-md-inline-block" src="./assets/wave1.png" alt="Wave" />
			<div
				className="container-fluid bg-svg mx-0 py-5 py-md-0 my-5 my-md-0 d-flex justify-content-center align-items-center profile"
				// style={{ background: `url(/assets/pattern/pattern_2.svg) no-repeat 50% 20%`, backgroundSize: "cover" }}
			>
				<div className="container" data-aos="zoom-in">
					<div className="row align-items-center py-3">
						<div className="col-lg-6">
							<h3 className="font-weight-bold">Pa Elton's Profile</h3>
							<p>
								Pa Elton, as he was popularly called, left his native country, England, to come to Ilesha, Nigeria in March
								1937 in response to a divine call to be a missionary; his wife and only child, 3-year old Ruth, joining him
								about six months later. And since that time right up to his eventual home-call 50 years later, Pa Elton...{" "}
							</p>
							<Link className="btn rounded bg-sec text-light px-3 py-2 read-more" to="/about-elton">
								Read more
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
			<img className="w-100 wave d-none d-md-inline-block" src="./assets/wave2.png" alt="Wave" />
		</div>
	);
};

export default Profile;
