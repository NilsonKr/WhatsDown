const express = require('express');
const passport = require('passport');
const axios = require('axios').default;
const boom = require('@hapi/boom');

//Basic Strategy
require('./strategies/basicStrategy');

function authRoutes(app) {
	const router = express.Router();
	app.use('/auth/', router);

	router.post('/login', passport.authenticate('basic', { session: false }), (req, res, next) => {
		console.log(req.user);

		res.end();
	});
}

module.exports = authRoutes;
