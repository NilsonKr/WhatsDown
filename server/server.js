const express = require('express');
const config = require('./config/index');
const path = require('path');
const cookieParser = require('cookie-parser');
const render = require('./ssr/render');
const app = express();

//Auth Routes
const authRoutes = require('./auth/routes');
const socialRoutes = require('./auth/socialRoutes');
//Services Routes
const userRoutes = require('./services/userRoutes');
const chatsRoutes = require('./services/chatsRoutes');

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
} else {
	app.use('*/statics', express.static(path.join(__dirname, '../dist/statics')));

	app.disable('x-powered-by');
}

authRoutes(app);
socialRoutes(app);
userRoutes(app);
chatsRoutes(app);

app.use('*/assets', express.static(path.join(__dirname, '../assets')));
app.get('*', render);

app.listen(config.port, '0.0.0.0', () => {
	console.log(`Magic Happens at http://localhost:${config.port}`);
});
