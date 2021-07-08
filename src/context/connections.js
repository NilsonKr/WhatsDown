import React, { useState } from 'react';

export const Context = React.createContext(null);

function ConnectionsProvider(props) {
	const [connections, setConnections] = useState(new Map());
	const [loggedSocket, setUserSocket] = useState(null);

	return (
		<Context.Provider
			value={{ connections, setConnections, loggedSocket, setUserSocket }}
		>
			{props.children}
		</Context.Provider>
	);
}

export default ConnectionsProvider;
