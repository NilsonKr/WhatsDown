import React, { useState } from 'react';

export const Context = React.createContext(null);

function ConnectionsProvider(props) {
	const connections = new Map();

	return <Context.Provider value={{ connections }}>{props.children}</Context.Provider>;
}

export default ConnectionsProvider;
