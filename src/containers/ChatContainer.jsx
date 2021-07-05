import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context/connections';

import ChatView from '../components/ChatView';
import ChatInput from '../components/ChatInput';

const ChatContainer = props => {
	const { userId, chatId } = useParams();

	const { connections } = useContext(Context);
	const socket = connections.get(chatId);

	const [chat, setChat] = useState(null);
	const [targetInfo, setTargetInfo] = useState(null);
	const [showEmojis, setEmojis] = useState(false);

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
	}, [props.chats]);

	//Send Messsage Through Sockets
	const sendMessage = message => {
		socket.emit('private', { message: message, chat: chatId, date: new Date(), user: props.user.id });
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
		</section>
	);
};

const mapStateToProps = ({ user, chats }) => ({ user, chats });

export default connect(mapStateToProps, null)(ChatContainer);
