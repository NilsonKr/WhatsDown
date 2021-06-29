export default (state = [], action) => {
	switch (action.type) {
		case 'SET_CHATS':
			return [...state, ...action.payload];
		default:
			return [...state];
	}
};
