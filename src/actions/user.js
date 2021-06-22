export const updateInfo = info => dispatch => {
	dispatch({
		type: 'UPDATE_INFO',
		payload: info,
	});
};
