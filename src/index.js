import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/combineReducers.js';
import initialState from './initialState.js';

import App from './App';

import './styles/style.scss';

const store = createStore(reducers, initialState, applyMiddleware(ReduxThunk));

console.log(store.getState());

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.querySelector('#app')
);
