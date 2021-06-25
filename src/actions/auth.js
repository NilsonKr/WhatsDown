import axios from 'axios';
const REMEMBER_TIME = 60 * 60 * 24 * 30;
const FOUR_HOURS_IN_SECONDS = 60 * 60 * 4;

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

export const login = userInfo => dispatch => {
	const rememberTime = userInfo.isRemember ? REMEMBER_TIME : FOUR_HOURS_IN_SECONDS;

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
		})
		.catch(err => console.log(err));
};
