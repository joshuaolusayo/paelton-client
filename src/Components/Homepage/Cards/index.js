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
		</div>
	);
};

export default Cards;
