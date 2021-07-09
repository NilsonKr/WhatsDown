import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { getChats, updateMessage, addChat } from '../actions/chats';
import useSearch from '../hooks/useSearch';
import getTargetUser from '../utils/getTargetUserChats';
import io from 'socket.io-client';
import { Context } from '../context/connections';

import HomeHeader from '../components/HomeHeader';
import FilterChats from '../components/FilterChats';
import ChatThumbnail from '../components/ChatThumbnail';
import HomeFooter from '../components/HomeFooter';

const HomeContainer = props => {
	const [newItems, query, setQuery] = useSearch(props.chats, 'chats');
	const { connections, setConnections, setUserSocket } = useContext(Context);

	useEffect(() => {
		//Set Sockets Connections if is not done yet or keep previous ones
		const currentConnections = new Map([...connections]);

		props.chats.forEach(chat => {
			if (!connections.has(chat._id)) {
				const newSocket = io(process.env.SOCKET_URL);

				newSocket.on('message', message => console.log(message));
				newSocket.emit('join chat', chat._id);
				newSocket.on('chatmsg', msg => {
					//Set new Msg and visibility Status
					props.updateMessage(chat._id, msg, 1);
				});

				currentConnections.set(chat._id, newSocket);
			}
		});
		setConnections(currentConnections);
	}, [props.chats.length]);

	//Charge chats
	useEffect(() => {
		if (props.chats.length === 0) {
			props.getChats();
		}

		if (!props.user.socket) {
			const loggedSocket = io(process.env.SOCKET_URL);
			// '60dac7f4965140043fb4d579'
			loggedSocket.emit('user room', props.user.id);

			loggedSocket.on('new chat client', chat => props.addChat(chat));

			setUserSocket(loggedSocket);
		}
	}, []);

	return (
		<main className='home__container'>
			<HomeHeader>
				<FilterChats query={query} setQuery={setQuery} />
			</HomeHeader>
			<section className='chatsThumbnail__container'>
				{newItems.map(chat => {
					const { user: userTarget, notSeen } = getTargetUser(chat.users, props.user);
					const lastMsg = chat.messages[chat.messages.length - 1];

					return (
						<ChatThumbnail
							key={chat._id}
							chatId={chat._id}
							id={userTarget._id}
							email={userTarget.email}
							name={userTarget.name}
							info={lastMsg && lastMsg.message}
							date={lastMsg && lastMsg.date}
							emoji={userTarget.status}
							notSeen={notSeen > 0 && notSeen}
						/>
					);
				})}
			</section>
			<HomeFooter />
		</main>
	);
};

const mapStateToProps = ({ chats, user }) => ({
	user,
	chats,
});

const mapDispatchToProps = {
	getChats,
	updateMessage,
	addChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
