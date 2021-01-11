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
		<div className="bg-svg py-5 py-lg-6 mt-6 profile__elton">
			{/* <img className="w-100 wave d-none d-md-inline-block" src="./assets/wave1.png" alt="Wave" /> */}
			<div className="container-fluid mx-0 my-4 my-md-0 d-flex justify-content-center align-items-center profile">
				<div className="container" data-aos="zoom-in">
					<div className="row align-items-center py-5">
						<div className="col-md-6 order-1 order-md-0">
							<h3 className="font-weight-bold">
								SG Elton: <br className="d-inline d-md-none" />A Man Sent From God
							</h3>
							<p>
								Pa Elton, as he was popularly called, left his native country, England, to come to Ilesha, Nigeria in March
								1937 in response to a divine call to be a missionary; his wife and only child, 3-year old Ruth, joining him
								about six months later. And since that time right up to his eventual home-call 50 years later, Pa Elton...{" "}
							</p>
							<Link className="btn rounded bg-sec text-light px-3 py-2 read-more" to="/about-elton">
								Read more
							</Link>
						</div>
						<div className="col-md-6 mb-5 mb-md-auto">
							<div className="d-flex flex-no-wrap justify-content-center align-items-center mb-5 mb-lg-0">
								<img className="img2" src="/assets/elton-12134738134.jpg" alt="Elton" />
								<img className="img1" src="/assets/ELTON 7.jpg" alt="Elton" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <img className="w-100 wave d-none d-md-inline-block" src="./assets/wave2.png" alt="Wave" /> */}
		</div>
	);
};

export default Profile;
