import React from 'react';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';

const ChatView = ({ userInfo }) => {
	console.log(userInfo);
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
			<div className='chat__main'>
				<div className='chat--msg incoming'>
					<p>Hello , how are you doing ?! 😜</p>
					<span className='chat--msg--date'>09:05 PM</span>
				</div>
				<div className='chat--msg '>
					<p>Hey, Im Doing Great And you , how are you going at the new work ?!🧪</p>
					<span className='chat--msg--date'>09:07 PM</span>
				</div>
			</div>
		</>
	);
};

export default ChatView;
