const passport = require('passport');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

const config = require('../../config/index');
const axios = require('axios').default;
const boom = require('@hapi/boom');

passport.use(
	new GoogleStrategy(
		{
			clientID: config.googleClientId,
			clientSecret: config.googleSecret,
			callbackURL: `/social/google/callback`,
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const { data: response, status } = await axios({
					method: 'post',
					url: `${config.apiUrl}/auth/signprovider`,
					data: {
						apiToken: config.apiToken,
						user: {
							name: profile.displayName,
							email: profile.emails[0].value,
							password: profile.id,
						},
					},
				});

				if (status !== 200) {
					return done(boom.unauthorized(), false);
				}

				return done(false, response.data);
			} catch (error) {
				return done(error, false);
			}
		}
	)
);
