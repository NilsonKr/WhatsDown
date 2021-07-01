import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ChatView from '../components/ChatView';
import ChatInput from '../components/ChatInput';

const ChatContainer = props => {
	const { userId, chatId } = useParams();

	const [chat, setChat] = useState(null);
	const [targetInfo, setTargetInfo] = useState(null);
	const [showEmojis, setEmojis] = useState(false);

	useEffect(() => {
		if (chat === null) {
			const findChat = props.chats.find(chat => chat._id === chatId);
			const findTargetUser = findChat.users.find(userInfo => userInfo.user._id === userId);

			setChat(findChat);
			setTargetInfo(findTargetUser);
		}
	}, []);

	return (
		<section className='chat__container' onClick={() => setEmojis(false)}>
			{targetInfo && <ChatView userInfo={targetInfo} />}
			<ChatInput showEmojis={showEmojis} setEmojis={setEmojis} />
		</section>
	);
};

const mapStateToProps = ({ user, chats }) => ({ user, chats });

export default connect(mapStateToProps, null)(ChatContainer);
