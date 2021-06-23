const express = require('express');
const passport = require('passport');
const axios = require('axios').default;
const boom = require('@hapi/boom');
const config = require('../config/index');

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

			res.cookie('token', data.token, {
				maxAge: '14400000',
			});

			res.status(200).json({
				user,
			});
		} catch (error) {
			next(error);
		}
	});
}

module.exports = authRoutes;
