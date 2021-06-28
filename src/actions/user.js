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
