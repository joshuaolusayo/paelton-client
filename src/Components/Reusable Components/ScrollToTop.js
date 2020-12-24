import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 300) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 300) {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);

		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [window.location.href, showScroll]);

	return (
		<span className={`bg-sec rounded-circle shadow ${showScroll ? "d-block" : "d-none"}`} id="scrollTop" onClick={scrollTop}>
			<i className="fa fa-arrow-up text-light"></i>
		</span>
	);
};

export default ScrollToTop;
