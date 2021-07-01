const express = require('express');

const config = require('../config/index');
const boom = require('@hapi/boom');
const axios = require('axios').default;

function userRoutes(app) {
	const router = express.Router();
	app.use('/user', router);

	router.get('/', async (req, res, next) => {
		const { token } = req.cookies;

		try {
			const { data: response, status } = await axios({
				method: 'get',
				url: `${config.apiUrl}/users`,
				headers: { Authorization: `Bearer ${token}` },
			});

			if (status !== 200) {
				return next(boom.unauthorized());
			}

			res.status(200).json(response.data);
		} catch (error) {
			next(error);
		}
	});

	router.get('/search', async (req, res, next) => {
		const { token } = req.cookies;
		const { username } = req.query;

		try {
			const { data: response, status } = await axios({
				method: 'get',
				url: `${config.apiUrl}/users?username=${username}`,
				headers: { Authorization: `Bearer ${token}` },
			});

			if (status !== 200) {
				return next(boom.unauthorized());
			}

			res.status(200).json(response.data);
		} catch (error) {
			next(error);
		}
	});

	router.put('/update/', async (req, res, next) => {
		const { token, userId } = req.cookies;

		if (!token || !userId) {
			return next(boom.unauthorized());
		}

		try {
			const { status } = await axios({
				method: 'put',
				url: `${config.apiUrl}/users/${userId}`,
				headers: { Authorization: `Bearer ${token}` },
				data: req.body,
			});

			if (status !== 201) {
				return next(boom.badRequest());
			}

			res.status(201).send('User Updated!');
		} catch (error) {
			next(error);
		}
	});
}

module.exports = userRoutes;
