import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Context } from './context/connections';

import Landing from './containers/LandingView';
import Home from './containers/HomeContainer';
import Profile from './containers/ProfileContainer';
import Chat from './containers/ChatContainer';
import Find from './containers/FindContainer';
import LogInContainer from './containers/LogInContainer';
import SignUpContainer from './containers/SignUpContainer';

const App = ({ isLogged }) => {
	const { connections, loggedSocket } = useContext(Context);

	useEffect(() => {
		return () => {
			if (loggedSocket) {
				loggedSocket.disconnect();
			}
			//Disconnect chat sockets
			for (const chatId of connections.keys()) {
				const socket = connections.get(chatId);

				socket.disconnect();
			}
		};
	}, []);

	return (
		<Switch>
			<Route exact path='/landing' component={Landing} />
			<Route exact path='/' component={isLogged ? Home : Landing} />
			<Route exact path='/profile' component={isLogged ? Profile : Landing} />
			<Route path='/chat/:userId/:chatId' component={isLogged ? Chat : Landing} />
			<Route exact path='/find' component={isLogged ? Find : Landing} />
			<Route exact path='/logIn' component={LogInContainer} />
			<Route exact path='/signUp' component={SignUpContainer} />
		</Switch>
	);
};

export default App;
