import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllArticles } from "../../../actions/articles";
import Pagination from "react-js-pagination";
import ReadingTime from "reading-time";

const Articles = (props) => {
	const [loading, setLoading] = useState(true);
	const [activePage, setCurrentPage] = useState(1);
	const display = 3;

	// Logic for displaying articles
	const indexOfLastToDo = activePage * display;
	const indexOfFirstToDo = indexOfLastToDo - display;
	useEffect(() => {
		if (loading) {
			props.getAllArticles().then(() => setLoading(false));
		}

		return () => setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	let data;
	if (!loading) {
		data = props.articles.data.data.slice(indexOfFirstToDo, indexOfLastToDo);
	}

	const handlePageChange = (pageNum) => {
		setCurrentPage(pageNum);
	};

	return !loading && data.length ? (
		<div className="container articles">
			<div className="row">
				{data.map((article) => {
					return (
						<div className="col-md-6 col-lg-4 my-4 mb-lg-5" key={article._id}>
							<Link to={`/article-details/${article._id}`}>
								<div className="card bg-light border-0 shadow h-100">
									<img className="card-img-top" src={article.image} alt={article.title} loading="lazy" />
									<div className="card-body p-4">
										<h5 className="card-title text-black">{article.title}</h5>
										<p className="card-text text-muted">
											<i className="fa fa-clock-o"></i> Reading time about {ReadingTime(article.content).text}
										</p>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>

			<Pagination
				activePage={activePage}
				itemsCountPerPage={3}
				totalItemsCount={props.articles.data.data.length}
				pageRangeDisplayed={3}
				onChange={handlePageChange}
			/>

			<div className="text-center mt-4">
				<span className="text-small">{`${indexOfFirstToDo + 1} - ${indexOfLastToDo} of ${
					props.articles.data.data.length
				} resources`}</span>
			</div>
		</div>
	) : (
		<div className="my-5 text-center lead">Loading...</div>
	);
};

const mapStateToProps = (state) => ({
	articles: state.articles.allArticles,
});

export default connect(mapStateToProps, { getAllArticles })(Articles);
