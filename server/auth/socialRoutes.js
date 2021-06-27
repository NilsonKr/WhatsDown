const express = require('express');
const passport = require('passport');
const axios = require('axios').default;
const boom = require('@hapi/boom');
const config = require('../config/index');

//Google Strategy
require('./strategies/googleStrategy');

function socialRoutes(app) {
	const router = express.Router();
	app.use('/social', router);

	//Initializing OAuth with Google
	router.get('/google', passport.authenticate('google', { scope: ['profile', 'openid', 'email'] }));

	//OAuth Google Callback
	router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res, next) => {
		if (!req.user) {
			return next(boom.unauthorized());
		}

		const { token, user } = req.user;

		res.cookie('token', token, {
			httpOnly: config.env === 'development' ? false : true,
			secure: config.env === 'development' ? false : true,
		});

		res.cookie('userId', user._id, {
			httpOnly: config.env === 'development' ? false : true,
			secure: config.env === 'development' ? false : true,
		});

		res.redirect('/landing');
	});
}

module.exports = socialRoutes;
