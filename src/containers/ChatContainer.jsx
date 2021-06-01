import React from 'react';
import { Link } from 'react-router-dom';

import userIcon from '../../assets/user.svg';

const ChatContainer = () => {
	return (
		<section className='chat__container'>
			<div className='chat__header'>
				<Link to='/'>
					<div className='goBack'></div>
				</Link>
				<img src={userIcon} alt='User' />
				<h2>Nilson Diaz</h2>
			</div>
			<div className='chat__main'>
				<div className='chat--msg incoming'>
					<p>Hello , how are you doing ?! 😜</p>
					<span className='chat--msg--date'>09:05 PM</span>
				</div>
				<div className='chat--msg '>
					<p>Hey, Im Doing Great And you , how are you going in the new work ?!🧪</p>
					<span className='chat--msg--date'>09:07 PM</span>
				</div>
			</div>
			<div className='chat__input'></div>
		</section>
	);
};

export default ChatContainer;
