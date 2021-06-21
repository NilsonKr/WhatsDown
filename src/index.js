import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles/style.scss';

ReactDOM.hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.querySelector('#app')
);
