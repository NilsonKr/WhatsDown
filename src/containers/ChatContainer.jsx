import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { updateMessage } from '../actions/chats';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context/connections';

import ChatView from '../components/ChatView';
import ChatInput from '../components/ChatInput';
import StartChatModal from '../components/StartChatModal';

const ChatContainer = props => {
	const { userId, chatId } = useParams();

	const { connections } = useContext(Context);
	const socket = connections.get(chatId);

	const [chat, setChat] = useState(null);
	const [targetInfo, setTargetInfo] = useState(null);
	const [showEmojis, setEmojis] = useState(false);

	//Setting Initial Data
	useEffect(async () => {
		if (userId && chatId !== 'new') {
			const findChat = props.chats.find(chat => chat._id === chatId);
			const findTargetUser = findChat.users.find(userInfo => userInfo.user._id === userId);

			setChat(findChat);
			setTargetInfo(findTargetUser.user);
		}

		if (chatId === 'new') {
			const { data: newUser } = await axios.get(`/user/${userId}`);

			setTargetInfo(newUser);
		}
	}, []);

	//Updating Messages at chat
	useEffect(() => {
		const findChat = props.chats.find(chat => chat._id === chatId);

		setChat(findChat);
	}, [props.chats]);

	//Send Messsage Through Sockets
	const sendMessage = message => {
		const newMsg = { _id: Date.now(), message: message, chat: chatId, date: new Date(), user: props.user.id };
		socket.emit('private', newMsg);
		props.updateMessage(chatId, newMsg);
	};

	return (
		<section className='chat__container' onClick={() => setEmojis(false)}>
			{targetInfo && (
				<>
					<ChatView
						userInfo={targetInfo}
						messages={chatId !== 'new' ? chat.messages : []}
						loggedUser={props.user.id}
					/>
					<ChatInput showEmojis={showEmojis} setEmojis={setEmojis} sendMessage={sendMessage} />
				</>
			)}
			{chatId === 'new' && <StartChatModal name={targetInfo && targetInfo.name} />}
		</section>
	);
};

const mapStateToProps = ({ user, chats }) => ({ user, chats });
const mapDispatchToProps = {
	updateMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
