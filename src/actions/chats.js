import axios from 'axios';
import getRelatedUsers from '../utils/getRelatedUsers';

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

export const updateMessage = (id, msg, notSeenMsgs) => (dispatch, getState) => {
	const { chats, user } = getState();
	//Inmutability & updating messages
	const chatIndex = chats.findIndex(chat => chat._id === id);
	const newChat = { ...chats[chatIndex] };

	if (msg) {
		newChat.messages = [...chats[chatIndex].messages];
		newChat.messages.push(msg);
	}

	if (notSeenMsgs) {
		const userIndex = newChat.users.findIndex(userInfo => userInfo.user._id !== user.id);
		const targetUser = newChat.users[userIndex];

		//Set Pendents message
		newChat.users[userIndex] = { ...targetUser, notSeen: targetUser.notSeen + notSeenMsgs };

		console.log(newChat);
	}

	dispatch({ type: 'SET_CHATS_MESSAGES', payload: { newChat, index: chatIndex } });
};
