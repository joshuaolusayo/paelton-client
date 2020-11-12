import React from "react";
import { Link } from "react-router-dom";
import Articles from "../Homepage/Cards/Articles";
import Share from "./Share";

const Details = () => {
	return (
		<div className="container my-3 my-lg-5 details">
			<div className="row justify-content-between align-items-start">
				<div className="col-lg-5 col-xl-4">
					<div className="shadow rounded p-4 p-lg-5 content mb-5">
						<h3 className="text-black font-weight-bold">Content</h3>
						<div className="d-flex flex-column">
							<Link className="text-sec mb-3 active" to="#">
								What is God saying today?
							</Link>
							<Link to="#" className=" text-black mb-3">
								Have you delivered your soul?
							</Link>
							<Link to="#" className=" text-black mb-3">
								Commanding power
							</Link>
							<Link to="#" className=" text-black mb-3">
								We are the 'master race'
							</Link>
							<Link to="#" className=" text-black mb-3">
								We are no longer slaves
							</Link>
							<Link to="#" className=" text-black mb-3">
								Now is the time for action
							</Link>
						</div>
					</div>
					<Share />
				</div>
				<div className="col-lg-7 col-xl-8 pl-lg-4 pl-xl-5 my-5 my-lg-auto text-muted">
					<h3 className="text-black">What is God saying today?</h3>
					<p>
						<q className="font-italic">What the Spirit saith unto the churches</q> Rev. 2:7,11,19,29, Chap, 3: 6,13,22
					</p>
					<p>
						Amidst the flood of words, sermons, and addresses which has resulted in a flood of confusing voices, it is clear
						that so few voices have a definite message and there is a lack of a clear word of spiritual guidance and authority
						for these days.
					</p>
					<p>
						While there are many good preachers of the Gospel, and there are soome champions of the Faith once once delivered to
						the saints, we are greatly in need of Prophets who will boldly declare <q>Thus saith the Lord</q>.
					</p>
					<p>
						We at <span className="font-weight-bold">Herald of the Last Days</span> believe that God is speaking to us, and you
						, and realize that the message is revolutionary and therefore costly, and likely to be unacceptable to many church
						leaders.
					</p>
					<p>
						We believe we are a <span className="text-uppercase">voice</span> and there are many others in many differenct
						countreies today, calling the Lord's people who desire to hear the voice of God calling; speaking and challenging
						His people to close their ears to the growing clamor of earthly programs and schemes and to obey Him and step out to
						minister to the many needy seekers around us.
					</p>
					<p>
						Let us emphatically state that this is NOT the time for a new domination or sect, drawing Christians into another
						internal fight with the resulting strife and bitterness, but God is speaking and is saying something special to us
						today.
					</p>
					<p>Let us tell you what God has spoken about to us.</p>
					<ol className="ml-2 ml-md-3 ml-lg-4">
						<li>
							God is definitely drawing the attention again of His people to the Person of His Beloved Son, our Lord and
							Savior Jesus Christ. To the name, work and glory that belongs to Him alone. So many other 'things' are creeping
							into the churches and Satan is seeking to divert the faith of Christians away from the Saviour Jesus Christ, and
							to fix their faith on such things as 'vestments, uniforms, crosses, pictures, altars, holy water, blessed oil,
							candles, and many such things'.
						</li>
					</ol>
					<p>
						None of these 'things' are evil in themselves but they become 'idols' and Christian juju when they take the position
						which has been won by the Lord Jesus alone. So we believe God is drawing special attention again to the LORD JESUS
						CHRIST. God is saying "Thous shalt have no other Savior for any of your needs other than my Son Jesus Christ." We
						emphasize today that Jesus Christ is THE LORD, over all powers, both heavenly and earthly and He has conquered and
						will reign over the earth.
					</p>
				</div>
			</div>
			<div className="row my-5 other-articles">
				<div className="col-12 border-bottom mb-5">
					<h3 className="font-weight-bold">Other articles</h3>
				</div>
                <Articles />
			</div>
		</div>
	);
};

export default Details;
