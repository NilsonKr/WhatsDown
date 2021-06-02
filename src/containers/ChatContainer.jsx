import React, { useState } from 'react';

import ChatView from '../components/ChatView';
import ChatInput from '../components/ChatInput';

const ChatContainer = () => {
	const [showEmojis, setEmojis] = useState(false);

	return (
		<section className='chat__container' onClick={() => setEmojis(false)}>
			<ChatView />
			<ChatInput showEmojis={showEmojis} setEmojis={setEmojis} />
		</section>
	);
};

export default ChatContainer;
