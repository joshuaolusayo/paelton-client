import React, { useState } from "react";
import Articles from "./Articles";
import Audios from "./Audios";
import Books from "./Books";

const Cards = () => {
	const [display, setDisplay] = useState("audios");
	return (
		<div className="container-fluid cards">
			<div className="container d-flex justify-content-center mb-5 p-2 rounded" id="cards-tab">
				<button
					className={`btn px-3 px-md-4 py-2 mx-1 mx-md-3 ${
						display === "audios" ? "bg-sec text-light" : "bg-light-sec text-black"
					}`}
					onClick={() => setDisplay("audios")}
				>
					Audios
				</button>
				<button
					className={`btn px-3 px-md-4 py-2 mx-1 mx-md-3 ${
						display === "articles" ? "bg-sec text-light" : "bg-light-sec text-black"
					}`}
					onClick={() => setDisplay("articles")}
				>
					Articles
				</button>
				<button
					className={`btn px-3 px-md-4 py-2 mx-1 mx-md-3 ${
						display === "books" ? "bg-sec text-light" : "bg-light-sec text-black"
					}`}
					onClick={() => setDisplay("books")}
				>
					Books
				</button>
			</div>
			{display === "audios" ? <Audios /> : display === "articles" ? <Articles /> : display === "books" ? <Books /> : null};
			<div className="container">
				<div className="row flex-column align-items-center justify-content-center">
					<div className="pagination d-flex justiyf-content-center align-items-center">
						<span className="rounded-circle left p-3">
							<i className="fa fa-chevron-left text-muted"></i>
						</span>

						<span className="pg p-2 mx-1 text-sec active">1</span>
						<span className="pg p-2 mx-1 text-sec">2</span>
						<span className="pg p-2 mx-1 text-sec">3</span>
						<span className="pg p-2 mx-1 text-sec">4</span>
						<span className="pg p-2 mx-1 text-sec text-muted">...</span>

						<span className="rounded-circle border-sec left p-3">
							<i className="fa fa-chevron-right text-sec"></i>
						</span>
					</div>
					<p className="text-black my-2">1-9 of 90 resources</p>
				</div>
			</div>
		</div>
	);
};

export default Cards;
