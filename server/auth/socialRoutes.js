const express = require('express');
const passport = require('passport');
const axios = require('axios').default;
const boom = require('@hapi/boom');
const config = require('../config/index');

const FOUR_HOURS = 4 * 60 * 60 * 1000;

//Google Strategy
require('./strategies/googleStrategy');

function socialRoutes(app) {
	const router = express.Router();
	app.use('/social', router);

	//Initializing OAuth with Google
	router.get('/google', passport.authenticate('google', { scope: ['profile', 'openid', 'email'] }));

	//OAuth Google Callback
	router.get(
		'/google/callback',
		passport.authenticate('google', { session: false }),
		async (req, res, next) => {
			if (!req.user) {
				return next(boom.unauthorized());
			}

			const { token, user } = req.user;
			const { isRemember } = req.cookies;

			try {
				const { data, status } = await axios({
					method: 'post',
					url: `${config.apiUrl}/auth/authorizate?remember=${isRemember}`,
					headers: { Authorization: `Bearer ${token}` },
				});

				if (status !== 200) {
					return next(boom.unauthorized());
				}

				//Set Cookies with authorization jwt and user_id
				const time = isRemember === 'true' ? config.rememberTime : FOUR_HOURS;

				res.cookie('token', data.token, {
					httpOnly: config.env === 'development' ? false : true,
					secure: config.env === 'development' ? false : true,
					maxAge: time,
				});

				res.cookie('userId', user._id, {
					httpOnly: config.env === 'development' ? false : true,
					secure: config.env === 'development' ? false : true,
					maxAge: time,
				});

				res.redirect('/');
			} catch (error) {
				next(error);
			}
		}
	);
}

module.exports = socialRoutes;
