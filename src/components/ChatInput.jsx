import React, { useState } from 'react';
import setResize from '../utils/setResize';

import EmojiPlaceHolder from '../../assets/emojiPlaceHolder.svg';
import ImgPlaceHolder from '../../assets/imgPlaceHolder.svg';
import SendIcon from '../../assets/right-arrow.svg';

const ChatInput = () => {
	const [message, setMessage] = useState('');

	return (
		<div className='chat__input'>
			<img src={EmojiPlaceHolder} alt='Emojis' />
			<img src={ImgPlaceHolder} alt='Upload Multimedia' />
			<textarea
				type='text'
				value={message}
				onChange={ev => {
					setResize(ev, '40px');
					setMessage(ev.target.value);
				}}
				placeholder='Type a message...'
			/>
			<img src={SendIcon} alt='Send Message' />
		</div>
	);
};

export default ChatInput;
