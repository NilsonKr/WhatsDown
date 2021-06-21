//React App
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../src/App';

const genHtml = app => {
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
        <div id="app">${app}</div>
        <script src="/statics/main.js"></script>
      </body>
    </html>
  `;
};

const render = (req, res, next) => {
	const appHtml = ReactDOMServer.renderToString(
		<StaticRouter location={req.url} context={{}}>
			<App />
		</StaticRouter>
	);

	res.send(genHtml(appHtml));
};

module.exports = render;
