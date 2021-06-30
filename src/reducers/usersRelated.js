export default (state = [], action) => {
	switch (action.type) {
		case 'SET_RELATED_USERS':
			return [...state, ...action.payload];
		default:
			return [...state];
	}
};
