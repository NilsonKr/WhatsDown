const INITIAL_STATE = {
	loading: false,
	error: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_LOAD':
			return { ...state, error: null, loading: action.payload };
		case 'SET_ERROR':
			return { ...state, error: action.payload, loading: false };
		default:
			return { ...state };
	}
};
