import axios from 'axios';
import getRelatedUsers from '../utils/getRelatedUsers';

export const addChat = newChat => ({
	type: 'NEW_CHAT',
	payload: { ...newChat, messages: [] },
});

export const getChats = () => (dispatch, getState) => {
	const {
		user: { id: userId },
	} = getState();

	axios
		.get('/chats/single')
		.then(({ data }) => {
			const relatedUsers = getRelatedUsers(data, userId);
			// //Set users who has a chat with logged user
			dispatch({ type: 'SET_CHATS', payload: data });
			dispatch({ type: 'SET_RELATED_USERS', payload: [...relatedUsers, userId] });
		})
		.catch(err => console.log(err));
};

export const updateMessage = (id, msg) => (dispatch, getState) => {
	const { chats } = getState();
	//Inmutability & updating messages
	const chatIndex = chats.findIndex(chat => chat._id === id);
	const newChat = { ...chats[chatIndex] };

	newChat.messages = [...chats[chatIndex].messages];
	newChat.messages.push(msg);

	dispatch({ type: 'SET_CHATS_MESSAGES', payload: { newChat, index: chatIndex } });
};

export const updateNotSeen = (chatId, isReset) => (dispatch, getState) => {
	const { chats, user } = getState();

	//Find corresponding chat & user targets
	const chatIndex = chats.findIndex(chat => chat._id === chatId);
	const newChat = { ...chats[chatIndex] };

	const userIndex = newChat.users.findIndex(userInfo => userInfo.user._id !== user.id);
	const targetUser = newChat.users[userIndex];

	//Set Pendents message
	newChat.users[userIndex] = {
		...targetUser,
		notSeen: isReset ? 0 : targetUser.notSeen + 1,
	};

	if (isReset && targetUser.notSeen > 0) {
		//Maping users payload to database
		const users = [...newChat.users];
		const usersToDb = users.map(userInfo => ({ ...userInfo, user: userInfo.user._id }));

		axios.put(`/chats/seen/${newChat._id}`, usersToDb);
	}

	dispatch({ type: 'SET_CHATS_MESSAGES', payload: { newChat, index: chatIndex } });
};
