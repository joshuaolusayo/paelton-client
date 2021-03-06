import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllBooks } from "../../../actions/books";
import Pagination from "react-js-pagination";
import { ClipLoader } from "react-spinners";

const Books = (props) => {
	const [loading, setLoading] = useState(true);
	const [activePage, setCurrentPage] = useState(1);
	const display = 6;

	// Logic for displaying audios
	const indexOfLastToDo = activePage * display;
	const indexOfFirstToDo = indexOfLastToDo - display;
	useEffect(() => {
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
						<div key={book._id} className="col-md-6 col-lg-4 my-4 mb-lg-5">
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
				itemsCountPerPage={6}
				totalItemsCount={props.books.data.data.length}
				pageRangeDisplayed={6}
				onChange={handlePageChange}
			/>

			<div className="text-center mt-4">
				<span className="text-small">{`${indexOfFirstToDo + 1} - ${indexOfLastToDo} of ${
					props.books.data.data.length
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
	books: state.books.allBooks,
});

export default connect(mapStateToProps, { getAllBooks })(Books);
