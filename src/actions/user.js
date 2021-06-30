import axios from 'axios';

export const updateInfo = info => dispatch => {
	axios
		.put('/user/update', info.updated)
		.then(({ data }) => {
			console.log(data);

			dispatch({
				type: 'UPDATE_INFO',
				payload: info.user,
			});
		})
		.catch(err => console.log(err));
};

export const getFindUsers = () => dispatch => {
	axios
		.get('/user')
		.then(({ data }) => {
			dispatch({ type: 'SET_FIND_USERS', payload: data });
		})
		.catch(err => console.log(err));
	//
};

export const setRelatedUsers = (chats, userId) => dispatch => {
	const usersRelated = chats.map(chat => {
		const externalUser = chat.users.filter(userInfo => userInfo.user._id !== userId);
		return externalUser[0].user._id;
	});
	dispatch({ type: 'SET_RELATED_USERS', payload: usersRelated });
};
