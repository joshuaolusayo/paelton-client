import React, { useEffect } from "react";
import AOS from "aos";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Audios = () => {
	useEffect(() => {
		AOS.init({ duration: 600, once: true });
	});

	return (
		<div className="container audios">
			<div className="row">
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<div className="card bg-light border-0 shadow h-100">
						<div className="card-body p-4">
							<h4 className="card-title font-weight-bold">Understand ye the kingdom? Part 1</h4>
							<p className="card-text">
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of
							</p>
							<div className="d-flex justify-content-between align-items-center">
								<a href="/audio.mp3" download="Understand ye the kingdom part 1">
									<button className="btn bg-pry text-light d-flex dwn">
										Download&nbsp;
										<span>
											<i className="fa fa-download"></i>
										</span>
									</button>
								</a>
								<AudioPlayer
									src="/audio.mp3"
									layout="horizontal-reverse"
									showJumpControls={false}
									showFilledVolume={false}
									customVolumeControls={[]}
									customAdditionalControls={[]}
									customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<div className="card bg-light border-0 shadow h-100">
						<div className="card-body p-4">
							<h4 className="card-title font-weight-bold">Understand ye the kingdom? Part 1</h4>
							<p className="card-text">
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of
							</p>
							<div className="d-flex justiy-content-between align-items-center">
								<a href="/audio.mp3" download="Understand ye the kingdom part 2">
									<button className="btn bg-pry text-light d-flex dwn">
										Download&nbsp;
										<span>
											<i className="fa fa-download"></i>
										</span>
									</button>
								</a>
								<AudioPlayer
									src="/audio.mp3"
									layout="horizontal-reverse"
									showJumpControls={false}
									showFilledVolume={false}
									customVolumeControls={[]}
									customAdditionalControls={[]}
									customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<div className="card bg-light border-0 shadow h-100">
						<div className="card-body p-4">
							<h4 className="card-title font-weight-bold">My little children, love not the world.</h4>
							<p className="card-text">
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of
							</p>
							<div className="d-flex justiy-content-between align-items-center">
								<a href="/audio.mp3" download="My little children, love not the world">
									<button className="btn bg-pry text-light d-flex dwn">
										Download&nbsp;
										<span>
											<i className="fa fa-download"></i>
										</span>
									</button>
								</a>
								<AudioPlayer
									src="/audio.mp3"
									layout="horizontal-reverse"
									showJumpControls={false}
									showFilledVolume={false}
									customVolumeControls={[]}
									customAdditionalControls={[]}
									customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<div className="card bg-light border-0 shadow h-100">
						<div className="card-body p-4">
							<h4 className="card-title font-weight-bold">The coming kingdom and its glory. Part 1</h4>
							<p className="card-text">
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of
							</p>
							<div className="d-flex justiy-content-between align-items-center">
								<a href="/audio.mp3" download="The coming kingdom and its glory. Part 1">
									<button className="btn bg-pry text-light d-flex dwn">
										Download&nbsp;
										<span>
											<i className="fa fa-download"></i>
										</span>
									</button>
								</a>
								<AudioPlayer
									src="/audio.mp3"
									layout="horizontal-reverse"
									showJumpControls={false}
									showFilledVolume={false}
									customVolumeControls={[]}
									customAdditionalControls={[]}
									customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<div className="card bg-light border-0 shadow h-100">
						<div className="card-body p-4">
							<h4 className="card-title font-weight-bold">The coming kingdom and its glory. Part 2</h4>
							<p className="card-text">
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of
							</p>
							<div className="d-flex justiy-content-between align-items-center">
								<a href="/audio.mp3" download="The coming kingdom and its glory. Part 1">
									<button className="btn bg-pry text-light d-flex dwn">
										Download&nbsp;
										<span>
											<i className="fa fa-download"></i>
										</span>
									</button>
								</a>
								<AudioPlayer
									src="/audio.mp3"
									layout="horizontal-reverse"
									showJumpControls={false}
									showFilledVolume={false}
									customVolumeControls={[]}
									customAdditionalControls={[]}
									customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
					<div className="card bg-light border-0 shadow h-100">
						<div className="card-body p-4">
							<h4 className="card-title font-weight-bold">What meant these sayings of the Lord?</h4>
							<p className="card-text">
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of
							</p>
							<div className="d-flex justiy-content-between align-items-center">
								<a href="/audio.mp3" download="What meant these sayings of the Lord?">
									<button className="btn bg-pry text-light d-flex dwn">
										Download&nbsp;
										<span>
											<i className="fa fa-download"></i>
										</span>
									</button>
								</a>
								<AudioPlayer
									src="/audio.mp3"
									layout="horizontal-reverse"
									showJumpControls={false}
									showFilledVolume={false}
									customVolumeControls={[]}
									customAdditionalControls={[]}
									customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Audios;
