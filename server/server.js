const express = require('express');
const config = require('./config/index');
const path = require('path');
const cookieParser = require('cookie-parser');
const render = require('./ssr/render');
const app = express();

//Auth Routes
const authRoutes = require('./auth/routes');

//Parsers
app.use(express.json());
app.use(cookieParser());

if (config.env === 'development') {
	const webpack = require('webpack');
	const devConfig = require('../webpack.config.dev');
	const compiler = webpack(devConfig);

	const devMiddleware = require('webpack-dev-middleware');
	const hotMiddleware = require('webpack-hot-middleware');

	app.use(devMiddleware(compiler, { serverSideRender: true }));
	app.use(hotMiddleware(compiler));
}

app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.get('*', render);
authRoutes(app);

app.listen(config.port, () => {
	console.log(`Magic Happens at http://localhost:${config.port}`);
});
