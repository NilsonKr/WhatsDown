import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './containers/LandingView';
import Home from './containers/HomeContainer';
import Profile from './containers/ProfileContainer';
import Chat from './containers/ChatContainer';
import Find from './containers/FindContainer';
import LogInContainer from './containers/LogInContainer';
import SignUpContainer from './containers/SignUpContainer';

const App = () => {
	return (
		<Switch>
			<Route exact path='/landing' component={Landing} />
			<Route exact path='/' component={Home} />
			<Route exact path='/profile' component={Profile} />
			<Route exact path='/chat' component={Chat} />
			<Route exact path='/find' component={Find} />
			<Route exact path='/logIn' component={LogInContainer} />
			<Route exact path='/signUp' component={SignUpContainer} />
		</Switch>
	);
};

export default App;
