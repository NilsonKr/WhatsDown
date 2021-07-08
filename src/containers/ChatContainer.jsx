import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { updateMessage, addChat } from '../actions/chats';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context/connections';

import ChatView from '../components/ChatView';
import ChatInput from '../components/ChatInput';
import StartChatModal from '../components/StartChatModal';

const chatSample = {
	_id: '60e775b65b8e350344a14195',
	users: [
		{
			_id: '60e775b65b8e350344a14196',
			notSeen: 0,
			user: {
				_id: '60d82975821bdb156d0a5716',
				name: 'Nilson Diaz',
				email: 'nuotrok444@gmail.com',
				status: '🦄',
				description: 'Enjoy the App :3 ',
			},
		},
		{
			_id: '60e775b65b8e350344a14197',
			notSeen: 0,
			user: {
				_id: '60dac7f4965140043fb4d579',
				name: 'Minari',
				email: 'minari@gmail.com',
				status: '🐧',
			},
		},
	],
	__v: 0,
};
const ChatContainer = props => {
	const { userId: targeUserId, chatId } = useParams();

	const { connections, loggedSocket } = useContext(Context);
	const socket = connections.get(chatId);

	const [chat, setChat] = useState(null);
	const [targetInfo, setTargetInfo] = useState(null);
	const [showEmojis, setEmojis] = useState(false);

	//Setting Initial Data
	useEffect(() => {
		if (targeUserId && chatId !== 'new') {
			props.updateMessage(chatId, false, 'reset');

			const findChat = props.chats.find(chat => chat._id === chatId);

			const findTargetUser = findChat.users.find(
				userInfo => userInfo.user._id === targeUserId
			);

			setChat(findChat);
			setTargetInfo(findTargetUser.user);
		}

		if (chatId === 'new') {
			axios.get(`/user/${targeUserId}`).then(({ data }) => setTargetInfo(data));
		}

		return function cleanup() {
			if (chatId !== 'new') {
				props.updateMessage(chatId, false, 'reset');
				//Update Database
			}
		};
	}, []);

	//Updating Messages at chat
	useEffect(() => {
		const findChat = props.chats.find(chat => chat._id === chatId);

		setChat(findChat);
	}, [props.chats]);

	//Send Messsage Through Sockets
	const sendMessage = message => {
		const newMsg = {
			_id: Date.now(),
			message: message,
			chat: chatId,
			date: new Date(),
			user: props.user.id,
		};
		socket.emit('private', newMsg);
		props.updateMessage(chatId, newMsg);
	};

	//Create New chat call
	const createNewChat = () => {
		const newChat = [
			{ notSeen: 0, user: props.user.id },
			{ notSeen: 0, user: targeUserId },
		];

		loggedSocket.emit('new chat', {
			toUserId: targeUserId,
			chat: chatSample,
		});

		props.addChat(chatSample);
		props.history.push(`/`);
		// axios
		// 	.post('/chats/create', newChat)
		// 	.then(({ data }) => {
		// 		props.addChat(data);
		// 		props.history.push(`/`);
		// 	})
		// 	.catch(err => console.log(err));
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
					{chatId !== 'new' && (
						<ChatInput
							showEmojis={showEmojis}
							setEmojis={setEmojis}
							sendMessage={sendMessage}
						/>
					)}
				</>
			)}
			{chatId === 'new' && (
				<StartChatModal create={createNewChat} name={targetInfo && targetInfo.name} />
			)}
		</section>
	);
};

const mapStateToProps = ({ user, chats }) => ({ user, chats });
const mapDispatchToProps = {
	updateMessage,
	addChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
