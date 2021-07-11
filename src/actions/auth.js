import dataState from './dataState';
import axios from 'axios';
const REMEMBER_TIME = 60 * 60 * 24 * 30;
const FOUR_HOURS_IN_SECONDS = 60 * 60 * 4;

export const signup = (userInfo, redirect) => dispatch => {
	dispatch({ type: dataState.load, payload: true });

	axios({
		method: 'post',
		url: '/auth/signup',
		data: userInfo,
	})
		.then(() => {
			dispatch({ type: dataState.load, payload: false });
			document.location.href = redirect;
		})
		.catch(err =>
			dispatch({
				type: dataState.error,
				payload: 'Oh oh something went wrong, Try Again!',
			})
		);
};

export const login = userInfo => dispatch => {
	const rememberTime = userInfo.isRemember ? REMEMBER_TIME : FOUR_HOURS_IN_SECONDS;
	dispatch({ type: dataState.load, payload: true });

	axios({
		method: 'post',
		url: `/auth/login?remember=${userInfo.isRemember}`,
		auth: {
			username: userInfo.email,
			password: userInfo.password,
		},
	})
		.then(({ data }) => {
			document.cookie = `userId=${data.user.id}; max-age=${rememberTime}`;
			dispatch({ type: dataState.load, payload: false });
			document.location.href = '/';
		})
		.catch(err =>
			dispatch({ type: dataState.error, payload: 'Invalid Fields , Please try again' })
		);
};

export const logout = () => dispatch => {
	document.cookie = 'token=';
	document.cookie = 'userId=';

	dispatch({ type: 'LOGOUT' });

	document.location.href = '/login';
};
