const setResize = (ev, defaultHeight) => {
	const target = ev.target;

	target.style.height = defaultHeight;
	target.style.height = ` ${target.scrollHeight}px`;
};

export default setResize;
