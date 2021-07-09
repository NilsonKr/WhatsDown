import axios from 'axios';

const setNotSeen = (chat, userId) => {
	const newChat = { ...chat };
	const userIndex = newChat.users.findIndex(userInfo => userInfo.user._id === userId);
	const loggedUser = newChat.users[userIndex];

	newChat.users[userIndex] = {
		...loggedUser,
		notSeen: loggedUser.notSeen + 1,
	};

	const users = [...newChat.users];
	const usersToDb = users.map(userInfo => ({ ...userInfo, user: userInfo.user._id }));

	axios.put(`/chats/seen/${newChat._id}`, usersToDb);
};

export default setNotSeen;
