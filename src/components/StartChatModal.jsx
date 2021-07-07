import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

const StartChatModal = ({ name }) => {
	const history = useHistory();

	return ReactDOM.createPortal(
		<div className='startChat__container'>
			<h2>
				Would you like to start a new Chat with <span className='modal_username'>{name || ''}</span> ?
			</h2>
			<div className='startChat__opts'>
				<img src='assets/check.svg' alt='No ! Go back' width='40px' />
				<img src='assets/cancel.svg' alt='Yes ! Create New Chat' width='40px' onClick={history.goBack} />
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default StartChatModal;
