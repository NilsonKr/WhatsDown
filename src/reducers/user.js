export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGOUT':
			return { ...state, user: { id: '', description: '', name: '', status: '', email: '' } };
		case 'SET_USER':
			return { ...state, ...action.payload };
		case 'UPDATE_INFO':
			return { ...state, ...action.payload };
		default:
			return { ...state };
	}
};
