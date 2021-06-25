export default (state = {}, action) => {
	switch (action.type) {
		case 'SET_USER':
			return { ...state, ...action.payload };
		case 'UPDATE_INFO':
			return { ...state, ...action.payload };
		default:
			return { ...state };
	}
};
