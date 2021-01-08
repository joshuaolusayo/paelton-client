import React, { useState, useEffect, useRef } from "react";

const ProgressBar = () => {
	const [scroll, setScroll] = useState(0);
	const [isSticky, setSticky] = useState(false);
	const ref = useRef(null);

	const handleScroll = () => {
		ref.current && document.documentElement.scrollTop > 400 ? setSticky(true) : setSticky(false);
	};

	useEffect(() => {
		let progressBarHandler = () => {
			const totalScroll = document.documentElement.scrollTop;
			const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scroll = `${totalScroll / windowHeight}`;

			setScroll(scroll);
		};

		window.addEventListener("scroll", progressBarHandler);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", progressBarHandler);
			window.removeEventListener("scroll", () => handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={`progress-container ${isSticky ? "sticky" : ""}`} ref={ref}>
			<div className="progress-bar" style={{ transform: `scale(${scroll}, 1)`, opacity: `1` }}></div>
		</div>
	);
};

export default ProgressBar;
