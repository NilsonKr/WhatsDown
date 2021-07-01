import axios from 'axios';
import getRelatedUsers from '../utils/getRelatedUsers';

export const getChats = () => (dispatch, getState) => {
	const {
		user: { id: userId },
	} = getState();

	axios
		.get('/chats/single')
		.then(({ data }) => {
			const relatedUsers = getRelatedUsers(data, userId);

			dispatch({ type: 'SET_CHATS', payload: data });
			//Set users who has a chat with logged user
			dispatch({ type: 'SET_RELATED_USERS', payload: [...relatedUsers, userId] });
		})
		.catch(err => console.log(err));

	console.log('chats');
};
