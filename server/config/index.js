require('dotenv').config();

const config = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 8000,
	apiUrl: process.env.API_URL,
	apiToken: process.env.API_TOKEN,
};

module.exports = config;
