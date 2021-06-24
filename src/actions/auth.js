import axios from 'axios';

export const signup = (userInfo, redirect) => dispatch => {
	axios({
		method: 'post',
		url: '/auth/signup',
		data: userInfo,
	})
		.then(({ data }) => {
			document.location.href = redirect;
		})
		.catch(err => console.log(err));
};
