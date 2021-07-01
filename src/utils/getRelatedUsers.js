const setRelatedUsers = (chats, userId) => {
	const usersRelated = chats.map(chat => {
		const externalUser = chat.users.filter(userInfo => userInfo.user._id !== userId);
		return externalUser[0].user._id;
	});

	return usersRelated;
};

export default setRelatedUsers;
