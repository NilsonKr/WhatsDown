const express = require('express');
const config = require('./config/index');
const path = require('path');
const app = express();

if (config.env === 'development') {
	const webpack = require('webpack');
	const devConfig = require('../webpack.config.dev');
	const compiler = webpack(devConfig);

	const devMiddleware = require('webpack-dev-middleware');
	const hotMiddleware = require('webpack-hot-middleware');

	app.use(devMiddleware(compiler, { serverSideRender: true }));
	app.use(hotMiddleware(compiler));
}

const genHtml = () => {
	return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="stylesheet" href="/statics/main.css" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <title>WhatsDown!</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/statics/main.js"></script>
      </body>
    </html>
  `;
};

const render = (req, res, next) => {
	res.send(genHtml());
};

app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.get('*', render);

app.listen(config.port, () => {
	console.log(`Magic Happens at http://localhost:${config.port}`);
});
