const express = require('express');
const passport = require('passport');
const axios = require('axios').default;
const boom = require('@hapi/boom');
const config = require('../config/index');

const FOUR_HOURS = '14400000';

//Basic Strategy
require('./strategies/basicStrategy');

function authRoutes(app) {
	const router = express.Router();
	app.use('/auth/', router);

	router.post('/login', passport.authenticate('basic', { session: false }), async (req, res, next) => {
		if (!req.user) {
			return next(boom.unauthorized());
		}

		const { token, user } = req.user;
		const { remember } = req.query;

		//Get Authorizing JWT
		try {
			const { data, status } = await axios({
				method: 'post',
				url: `${config.apiUrl}/auth/authorizate`,
				headers: { Authorization: `Bearer ${token}` },
			});

			if (status !== 200) {
				return next(boom.unauthorized());
			}

			//Set token Cookie
			const time = remember === 'true' ? config.rememberTime : FOUR_HOURS;

			res.cookie('token', data.token, {
				httpOnly: config.env === 'development' ? false : true,
				secure: config.env === 'development' ? false : true,
				maxAge: time,
			});

			res.status(200).json({
				user,
			});
		} catch (error) {
			next(error);
		}
	});

	router.post('/signup', async (req, res, next) => {
		try {
			const { data, status } = await axios({
				method: 'post',
				url: `${config.apiUrl}/auth/sign-up`,
				data: {
					user: req.body,
				},
			});

			if (status !== 201) {
				return next(boom.badRequest());
			}

			res.status(201).json({
				user: data,
			});
		} catch (error) {
			next(error);
		}
	});
}

module.exports = authRoutes;
