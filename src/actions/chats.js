import axios from 'axios';

export const getChats = () => dispatch => {
	axios
		.get('/chats/single')
		.then(({ data }) => {
			dispatch({ type: 'SET_CHATS', payload: data });
		})
		.catch(err => console.log(err));
};
