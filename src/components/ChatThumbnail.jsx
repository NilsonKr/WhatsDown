import React from 'react';
import { Link } from 'react-router-dom';

const ChatThumbnail = ({ img, name, info, date, emoji, notSeen }) => {
	return (
		<Link to='/chat' className={`chatsThumbnail__chat ${notSeen && 'not-seen'}`}>
			<div className='chatsThumbnail__profile'>
				<img src={img || 'assets/user.svg'} alt='' width='45px' />
				<span className='chatsThumbnail--status'>{emoji}</span>
			</div>
			<div className='chatsThumbnail__chat--info'>
				<h2>
					{name} {notSeen && <span className='chat--notification'></span>}
				</h2>
				<p>{info}</p>
			</div>
			<p className='chatsThumbnail__chat--date'>{date || ''}</p>
		</Link>
	);
};

export default ChatThumbnail;
