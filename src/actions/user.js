import dataState from './dataState';
import axios from 'axios';

export const updateInfo = info => dispatch => {
	axios
		.put('/user/update', info.updated)
		.then(() => {
			dispatch({
				type: 'UPDATE_INFO',
				payload: info.user,
			});
		})
		.catch(err => console.log(err));
};

export const getFindUsers = () => dispatch => {
	dispatch({ type: dataState.load, payload: true });

	axios
		.get('/user')
		.then(({ data }) => {
			dispatch({ type: dataState.load, payload: false });
			dispatch({ type: 'SET_FIND_USERS', payload: data });
		})
		.catch(err =>
			dispatch({
				type: dataState.error,
				payload: 'Internal Error, Refresh the Page or Try later :(',
			})
		);
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
