import React, { useState } from 'react';
import setResize from '../utils/setResize';

import { Picker } from 'emoji-mart';

const ChatInput = ({ showEmojis, setEmojis }) => {
	const [message, setMessage] = useState('');

	return (
		<div className='chat__input' onClick={ev => ev.stopPropagation()}>
			{showEmojis && (
				<div className='chat--emojis'>
					<Picker set='apple' onSelect={ev => setMessage(message + ev.native)} style={{ width: '100%' }} />
				</div>
			)}
			<img src='assets/emojiPlaceHolder.svg' alt='Emojis' onClick={() => setEmojis(!showEmojis)} />
			<img src='assets/imgPlaceHolder.svg' alt='Upload Multimedia' />
			<textarea
				type='text'
				value={message}
				onChange={ev => {
					setResize(ev, '40px');
					setMessage(ev.target.value);
				}}
				placeholder='Type a message...'
			/>
			<img src='assets/right-arrow.svg' alt='Send Message' />
		</div>
	);
};

export default ChatInput;
