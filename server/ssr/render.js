const config = require('../config/index');
import axios from 'axios';

//React App
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../src/App';
import ConnectionsProvider from '../../src/context/connections';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../src/reducers/combineReducers';

const genHtml = (app, preloadedState) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
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
					<div id="modal"></div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/statics/main.js"></script>
      </body>
    </html>
  `;
};

const render = async (req, res, next) => {
	if (req.url.includes('chat')) {
		return res.redirect('/');
	}

	const { userId, token } = req.cookies;

	const initialState = {
		user: {
			id: '',
			name: '',
			email: '',
			description: '',
			status: '',
		},
		chats: [],
		findUsers: [],
		usersRelated: [],
	};

	if (userId) {
		try {
			const { data: response } = await axios({
				method: 'get',
				url: `${config.apiUrl}/users/${userId}`,
				headers: { Authorization: `Bearer ${token}` },
			});

			initialState.user = { ...initialState.user, ...response.data, id: userId };
		} catch (error) {
			console.log(error.message);
		}
	}

	const store = createStore(reducers, initialState);

	const preloadedState = store.getState();

	const appHtml = ReactDOMServer.renderToString(
		<Provider store={store}>
			<ConnectionsProvider>
				<StaticRouter location={req.url} context={{}}>
					<App isLogged={userId} />
				</StaticRouter>
			</ConnectionsProvider>
		</Provider>
	);

	res.send(genHtml(appHtml, preloadedState));
};

module.exports = render;
