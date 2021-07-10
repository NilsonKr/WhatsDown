import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { format } from 'date-fns';

const ChatView = ({ userInfo, messages, loggedUser }) => {
	const msgContainer = useRef();

	useEffect(() => {
		//Set Scroll pointing to the newest messages
		msgContainer.current.scrollTop = msgContainer.current.scrollHeight;
	}, []);

	return (
		<>
			<div className='chat__header'>
				<Link to='/'>
					<div className='goBack'></div>
				</Link>
				<div className='chat__header--img'>
					<img src={gravatar(userInfo.email)} alt='User' />
					<span className='chat_header--status'>{userInfo.status || '🙂'}</span>
				</div>
				<h2>{userInfo.name}</h2>
			</div>
			<div className='chat__main' ref={msgContainer}>
				{messages.map(msg => {
					const formatDate = format(new Date(msg.date), 'h:m a');

					return (
						<div
							key={msg._id}
							className={`chat--msg ${msg.user !== loggedUser && 'incoming'}`}
						>
							<p>{msg.message}</p>
							<span className='chat--msg--date'>{formatDate}</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ChatView;
