import React from 'react';
import ReactDOM from 'react-dom';

const StartChatModal = ({ name }) => {
	return ReactDOM.createPortal(
		<div className='startChat__container'>
			<h2>
				Would you like to start a new Chat with <span className='modal_username'>{name || ''}</span> ?
			</h2>
			<div className='startChat__opts'>
				<img src='assets/check.svg' alt='No ! Go back' width='40px' />
				<img src='assets/cancel.svg' alt='Yes ! Create New Chat' width='40px' />
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default StartChatModal;
