import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/HomeContainer';
import Profile from './containers/ProfileContainer';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/profile' component={Profile} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
