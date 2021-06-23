const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const axios = require('axios').default;
const boom = require('@hapi/boom');
const config = require('../../config/index');

passport.use(
	new BasicStrategy(async (email, password, done) => {
		try {
			const { data, status } = await axios({
				method: 'post',
				url: `${config.apiUrl}/auth/sign-in`,
				auth: {
					username: email,
					password: password,
				},
				data: {
					apiToken: config.apiToken,
				},
			});

			if (status !== 200) {
				return done(boom.unauthorized(), false);
			}

			return done(false, data);
		} catch (error) {
			return done(error, false);
		}
	})
);
