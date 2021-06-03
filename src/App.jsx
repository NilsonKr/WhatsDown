import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/HomeContainer';
import Profile from './containers/ProfileContainer';
import Chat from './containers/ChatContainer';
import Find from './containers/FindContainer';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/chat' component={Chat} />
				<Route exact path='/find' component={Find} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
