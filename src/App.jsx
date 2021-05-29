import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/HomeContainer';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact route='/' component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
