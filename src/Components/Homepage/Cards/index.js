import React, { useState } from "react";
import Articles from "./Articles";
import Audios from "./Audios";
import Books from "./Books";

const Cards = () => {
	const [display, setDisplay] = useState("audios");
	
	return (
		<div id="explore" className="container-fluid cards">
			<div className="container d-flex justify-content-center mb-4 pt-2 rounded" id="cards-tab">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<button
						className={`btn px-3 px-md-4 py-2 mx-1 mx-md-3 ${
							display === "audios" ? "bg-sec text-light" : "bg-light-sec text-black"
						}`}
						onClick={() => setDisplay("audios")}
					>
						Audios
					</button>
					<i className={`show__arrow ${display === "audios" ? "opacity-1" : "opacity-0"}`}></i>
				</div>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<button
						className={`btn px-3 px-md-4 py-2 mx-1 mx-md-3 ${
							display === "articles" ? "bg-sec text-light" : "bg-light-sec text-black"
						}`}
						onClick={() => setDisplay("articles")}
					>
						Articles
					</button>
					<i className={`show__arrow ${display === "articles" ? "opacity-1" : "opacity-0"}`}></i>
				</div>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<button
						className={`btn px-3 px-md-4 py-2 mx-1 mx-md-3 ${
							display === "books" ? "bg-sec text-light" : "bg-light-sec text-black"
						}`}
						onClick={() => setDisplay("books")}
					>
						Books
					</button>
					<i className={`show__arrow ${display === "books" ? "opacity-1" : "opacity-0"}`}></i>
				</div>
			</div>
			{display === "audios" ? <Audios /> : display === "articles" ? <Articles /> : display === "books" ? <Books /> : null}
			{/* <div className="container">
				<div className="row flex-column align-items-center justify-content-center">
					<div className="pagination d-flex justiyf-content-center align-items-center mb-4">
						<span className="rounded-circle prev p-3 mr-3">
							<i className="fa fa-chevron-left text-muted"></i>
						</span>

						<span className="pg p-2 mx-1 text-sec active">1</span>
						<span className="pg p-2 mx-1 text-sec">2</span>
						<span className="pg p-2 mx-1 text-sec">3</span>
						<span className="pg p-2 mx-1 text-sec">4</span>
						<span className="pg p-2 mx-1 text-sec text-muted">...</span>

						<span className="rounded-circle next p-3 ml-3">
							<i className="fa fa-chevron-right text-muted"></i>
						</span>
					</div>
					<p className="text-black">1-9 of 90 resources</p>
				</div>
			</div> */}
		</div>
	);
};

export default Cards;
