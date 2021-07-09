import React from 'react';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { format } from 'date-fns';

const ChatThumbnail = ({ chatId, id, email, name, info = '', date, emoji, notSeen }) => {
	const formatDate = date ? format(new Date(date), 'h:m a') : '';

	return (
		<Link
			to={`/chat/${id}/${chatId}`}
			className={`chatsThumbnail__chat ${notSeen && 'not-seen'}`}
		>
			<div className='chatsThumbnail__profile'>
				<img src={email ? gravatar(email) : 'assets/user.svg'} alt={name} width='45px' />
				<span className='chatsThumbnail--status'>{emoji}</span>
			</div>
			<div className='chatsThumbnail__chat--info'>
				<h2>
					{/* Validate String length */}
					{name.length > 20 ? name.substr(0, 18) + '...' : name}
					{notSeen && <span className='chat--notification'>{notSeen}</span>}
				</h2>
				<p>{info.length > 30 ? info.substr(0, 28) + '...' : info}</p>
			</div>
			<p className='chatsThumbnail__chat--date'>{formatDate}</p>
		</Link>
	);
};

export default ChatThumbnail;
