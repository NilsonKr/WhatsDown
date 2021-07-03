import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ChatView from '../components/ChatView';
import ChatInput from '../components/ChatInput';

const ChatContainer = props => {
	const { userId, chatId } = useParams();

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
	}, []);

	return (
		<section className='chat__container' onClick={() => setEmojis(false)}>
			{targetInfo && (
				<>
					<ChatView userInfo={targetInfo} messages={chat.messages} loggedUser={props.user.id} />
					<ChatInput showEmojis={showEmojis} setEmojis={setEmojis} />
				</>
			)}
		</section>
	);
};

const mapStateToProps = ({ user, chats }) => ({ user, chats });

export default connect(mapStateToProps, null)(ChatContainer);
