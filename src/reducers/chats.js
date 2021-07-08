export default (state = [], action) => {
	switch (action.type) {
		case 'SET_CHATS':
			return [...state, ...action.payload];
		case 'NEW_CHAT':
			return [...state, action.payload];
		case 'SET_CHATS_MESSAGES':
			const newList = [...state];

			newList[action.payload.index] = action.payload.newChat;

			return [...newList];
		default:
			return [...state];
	}
};
