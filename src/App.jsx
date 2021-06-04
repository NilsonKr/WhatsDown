import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/HomeContainer';
import Profile from './containers/ProfileContainer';
import Chat from './containers/ChatContainer';
import Find from './containers/FindContainer';
import LogInContainer from './containers/LogInContainer';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/chat' component={Chat} />
				<Route exact path='/find' component={Find} />
				<Route exact path='/logIn' component={LogInContainer} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
