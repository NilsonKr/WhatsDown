import React, { useState } from 'react';

export const Context = React.createContext(null);

function ConnectionsProvider(props) {
	const [connections, setConnections] = useState(new Map());

	return <Context.Provider value={{ connections, setConnections }}>{props.children}</Context.Provider>;
}

export default ConnectionsProvider;
