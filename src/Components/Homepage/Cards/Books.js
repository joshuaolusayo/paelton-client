import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { connect } from "react-redux";
import { getAllBooks } from "../../../actions/books";

import Pagination from "react-js-pagination";

const Books = (props) => {
	const [loading, setLoading] = useState(true);
	const [activePage, setCurrentPage] = useState(1);
	const display = 3;

	// Logic for displaying audios
	const indexOfLastToDo = activePage * display;
	const indexOfFirstToDo = indexOfLastToDo - display;
	useEffect(() => {
		AOS.init({ duration: 600, once: true });

		if (loading) {
			props.getAllBooks().then(() => setLoading(false));
		}

		return () => setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	let data;
	if (!loading) {
		data = props.books.data.data.slice(indexOfFirstToDo, indexOfLastToDo);
	}

	const handlePageChange = (pageNum) => {
		setCurrentPage(pageNum);
	};

	return !loading && data.length ? (
		<div className="container">
			<div className="row">
				{data.map((book) => {
					return (
						<div key={book._id} className="col-md-6 col-lg-4 my-4 mb-lg-5" data-aos="fade-up">
							<Link to={`/book-details/${book._id}`}>
								<div className="card bg-light border-0 shadow">
									<img className="card-img-top" src={book.image} alt={book.title} loading="lazy" />
								</div>
							</Link>
						</div>
					);
				})}
			</div>

			<Pagination
				activePage={activePage}
				itemsCountPerPage={3}
				totalItemsCount={props.books.data.data.length}
				pageRangeDisplayed={3}
				onChange={handlePageChange}
			/>

			<div className="text-center mt-4">
				<span className="text-small">{`${indexOfFirstToDo + 1} - ${indexOfLastToDo} of ${props.books.data.data.length} resources`}</span>
			</div>
		</div>
	) : (
		<div className="my-5 text-center">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	books: state.books.allBooks,
});

export default connect(mapStateToProps, { getAllBooks })(Books);
