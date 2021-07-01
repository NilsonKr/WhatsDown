import { useMemo, useState, useEffect } from 'react';

function useSearch(items, target) {
	const [newItems, setNewItems] = useState(items);
	const [query, setQuery] = useState('');

	useEffect(() => {
		setNewItems(items);
	}, [items.length]);

	//Filter chars by User Name in the query
	if (target === 'chats') {
		useMemo(() => {
			const filteredItems = items.filter(chat => {
				const includeUser = chat.users.find(({ user }) =>
					user.name.toLowerCase().includes(query.toLowerCase())
				);
				return includeUser;
			});
			setNewItems(filteredItems);
		}, [query]);
	}

	return [newItems, query, setQuery, setNewItems];
}

export default useSearch;
