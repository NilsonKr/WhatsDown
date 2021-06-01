import React, { useState } from 'react';

import EmojiPlaceHolder from '../../assets/emojiPlaceHolder.svg';
import ImgPlaceHolder from '../../assets/imgPlaceHolder.svg';

// TO-DO : Resizable Input

const ChatInput = () => {
	const [message, setMessage] = useState('');

	return (
		<div className='chat__input'>
			<img src={EmojiPlaceHolder} alt='Emojis' />
			<img src={ImgPlaceHolder} alt='Upload Multimedia' />
			<input
				type='text'
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder='Type a message...'
			/>
		</div>
	);
};

export default ChatInput;
