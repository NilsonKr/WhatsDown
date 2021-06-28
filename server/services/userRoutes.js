const express = require('express');

const config = require('../config/index');
const boom = require('@hapi/boom');
const axios = require('axios').default;

function userRoutes(app) {
	const router = express.Router();
	app.use('/user', router);

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
