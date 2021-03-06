require('dotenv').config();

const config = {
	env: process.env.NODE_ENV || 'development',
	rememberTime: 1000 * 60 * 60 * 24 * 30,
	port: process.env.PORT || 8000,
	apiUrl: process.env.API_URL,
	apiToken: process.env.API_TOKEN,
	googleClientId: process.env.GOOGLE_CLIENT_ID,
	googleSecret: process.env.GOOGLE_SECRET,
};

module.exports = config;
