import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/combineReducers.js';
import ConnectionsProvider from './context/connections';

import App from './App';

import './styles/style.scss';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState, applyMiddleware(ReduxThunk));

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
	<Provider store={store}>
		<ConnectionsProvider>
			<BrowserRouter>
				<App isLogged={preloadedState.user.id} />
			</BrowserRouter>
		</ConnectionsProvider>
	</Provider>,
	document.querySelector('#app')
);
