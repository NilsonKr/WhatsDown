import React, { useState } from 'react';

export const Context = React.createContext(null);

function ConnectionsProvider(props) {
	const [connections, setConnection] = useState(new Map());

	return <Context.Provider value={{ connections, setConnection }}>{props.children}</Context.Provider>;
}

export default ConnectionsProvider;
