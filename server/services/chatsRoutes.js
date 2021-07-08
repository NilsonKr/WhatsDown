const express = require('express');

const config = require('../config/index');
const boom = require('@hapi/boom');
const axios = require('axios').default;

function chatsRoutes(app) {
	const router = express.Router();
	app.use('/chats', router);

	router.get('/single', async (req, res, next) => {
		const { userId, token } = req.cookies;

		try {
			const { data: response, status } = await axios({
				method: 'get',
				url: `${config.apiUrl}/chats?user=${userId}`,
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

	router.post('/create', async (req, res, next) => {
		const { token } = req.cookies;

		try {
			const { status, data: response } = await axios({
				url: `${config.apiUrl}/chats`,
				method: 'post',
				headers: { Authorization: `Bearer ${token}` },
				data: req.body,
			});

			if (status !== 201) {
				return next(boom.badRequest());
			}

			res.status(201).json(response.data);
		} catch (error) {
			next(error);
		}

		res.end();
	});
}

module.exports = chatsRoutes;
