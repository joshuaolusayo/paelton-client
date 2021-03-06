import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllAudios } from "../../../actions/audios";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Pagination from "react-js-pagination";
import ReactHtmlParser from "react-html-parser";
import { ClipLoader } from "react-spinners";

const Audios = (props) => {
	const [loading, setLoading] = useState(true);
	const [activePage, setCurrentPage] = useState(1);
	const display = 6;

	// Logic for displaying audios
	const indexOfLastToDo = activePage * display;
	const indexOfFirstToDo = indexOfLastToDo - display;
	useEffect(() => {
		if (loading) {
			props.getAllAudios().then(() => setLoading(false));
		}

		return () => setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	let data;
	if (!loading) {
		data = props.audios.data.data.slice(indexOfFirstToDo, indexOfLastToDo);
	}

	const handlePageChange = (pageNum) => {
		setCurrentPage(pageNum);
	};

	return !loading && data.length ? (
		<div className="container audios">
			<div className="row">
				{data.map((audio) => {
					return (
						<div key={audio._id} className="col-md-6 col-lg-4 my-4 mb-lg-5">
							<div className="card bg-light border-0 shadow h-100">
								<div className="card-body p-4">
									<h4 className="card-title font-weight-bold">{audio.title}</h4>
									<div className="card-text mb-5">{ReactHtmlParser(audio.description)}</div>
									<div className="d-flex justify-content-between card-foot w-100">
										<a href={audio.link} download={audio.title}>
											<button className="btn bg-pry text-light d-flex dwn">
												Download&nbsp;
												<span>
													<i className="fa fa-download"></i>
												</span>
											</button>
										</a>
										<AudioPlayer
											src={audio.link}
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
					);
				})}
			</div>

			<Pagination
				activePage={activePage}
				itemsCountPerPage={6}
				totalItemsCount={props.audios.data.data.length}
				pageRangeDisplayed={6}
				onChange={handlePageChange}
			/>

			<div className="text-center mt-4">
				<span className="text-small">{`${indexOfFirstToDo + 1} - ${indexOfLastToDo} of ${
					props.audios.data.data.length
				} resources`}</span>
			</div>
		</div>
	) : (
		<div className="my-5 text-center lead">
			<ClipLoader color={"#0053ac"} loading />
		</div>
	);
};

const mapStateToProps = (state) => ({
	audios: state.audios.allAudios,
});

export default connect(mapStateToProps, { getAllAudios })(Audios);
