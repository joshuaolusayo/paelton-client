import React, {useState} from "react";

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 430) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 300) {
			setShowScroll(false);
		}
	};

	window.addEventListener("scroll", checkScrollTop);
	return (
		<span className={`bg-sec rounded-circle shadow ${showScroll ? "d-block" : "d-none"}`} id="scrollTop" onClick={scrollTop}>
			<i className="fa fa-arrow-up text-light"></i>
		</span>
	);
};

export default ScrollToTop;
