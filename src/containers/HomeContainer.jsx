import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { getChats, updateMessage } from '../actions/chats';
import useSearch from '../hooks/useSearch';
import io from 'socket.io-client';
import { Context } from '../context/connections';

import HomeHeader from '../components/HomeHeader';
import FilterChats from '../components/FilterChats';
import ChatThumbnail from '../components/ChatThumbnail';
import HomeFooter from '../components/HomeFooter';

const HomeContainer = props => {
	const [newItems, query, setQuery] = useSearch(props.chats, 'chats');
	const { connections, setConnections } = useContext(Context);

	useEffect(() => {
		//Set Sockets Connections if is not done yet
		if (connections.size === 0) {
			const currentConnections = new Map();

			props.chats.forEach(chat => {
				if (!connections.has(chat._id)) {
					const newSocket = io(process.env.SOCKET_URL);

					newSocket.on('message', message => console.log(message));
					newSocket.emit('join chat', chat._id);
					newSocket.on('chatmsg', msg => {
						props.updateMessage(chat._id, msg);
					});

					currentConnections.set(chat._id, newSocket);
				}
			});
			setConnections(currentConnections);
		}
	}, [props.chats.length]);

	//Charge chats
	useEffect(() => {
		if (props.chats.length === 0) {
			props.getChats();
		}
	}, []);

	const getTargetUser = users => {
		//Find user target that doesnt correspond with our Logged User
		const target = users.filter(userInfo => {
			if (userInfo.user._id !== props.user.id) {
				return userInfo;
			}
		});

		return target[0].user;
	};

	return (
		<>
			<HomeHeader>
				<FilterChats query={query} setQuery={setQuery} />
			</HomeHeader>
			<section className='chatsThumbnail__container'>
				{newItems.map(chat => {
					const userTarget = getTargetUser(chat.users);
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
						/>
					);
				})}
				{/* <ChatThumbnail
					name='Minari'
					lastMsg='So whatever stuff...'
					// notSeen={true}
					date='08:03 PM'
					emoji='🐧'
				/> */}
			</section>
			<HomeFooter />
		</>
	);
};

const mapStateToProps = ({ chats, user }) => ({
	user,
	chats,
});

const mapDispatchToProps = {
	getChats,
	updateMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
