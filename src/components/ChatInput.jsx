import React, { useState } from 'react';
import setResize from '../utils/setResize';

import { Picker } from 'emoji-mart';

import EmojiPlaceHolder from '../../assets/emojiPlaceHolder.svg';
import ImgPlaceHolder from '../../assets/imgPlaceHolder.svg';
import SendIcon from '../../assets/right-arrow.svg';

const ChatInput = ({ showEmojis, setEmojis }) => {
	const [message, setMessage] = useState('');

	return (
		<div className='chat__input' onClick={ev => ev.stopPropagation()}>
			{showEmojis && (
				<div className='chat--emojis'>
					<Picker
						set='apple'
						onSelect={ev => setMessage(message + ev.native)}
						style={{ width: '100%' }}
					/>
				</div>
			)}
			<img src={EmojiPlaceHolder} alt='Emojis' onClick={() => setEmojis(!showEmojis)} />
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
