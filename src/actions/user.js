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

//<---DEPRECATED ACTION--->

// export const setRelatedUsers = chats => (dispatch, getState) => {
// 	const {
// 		user: { id: userId },
// 	} = getState();

// 	const usersRelated = getRelatedUsers(chats, userId);

// 	dispatch({ type: 'SET_RELATED_USERS', payload: [...usersRelated, userId] });
// };
