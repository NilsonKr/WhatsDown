import React from 'react';
import { Link } from 'react-router-dom';

import userImg from '../../assets/user.svg';

const ChatThumbnail = ({ img, name, info, date, emoji, notSeen }) => {
	return (
		<Link to='/chat' className={`messages__chat ${notSeen && 'not-seen'}`}>
			<div className='messages__profile'>
				<img src={img || userImg} alt='' />
				<span className='messages--status'>{emoji}</span>
			</div>
			<div className='messages__chat--info'>
				<h2>
					{name} {notSeen && <span className='chat--notification'></span>}
				</h2>
				<p>{info}</p>
			</div>
			<p className='messages__chat--date'>{date || ''}</p>
		</Link>
	);
};

export default ChatThumbnail;
