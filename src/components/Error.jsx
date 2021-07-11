import React from 'react';

const Error = ({ message }) => {
	return (
		<div className='state_container'>
			<img src='/assets/warning.svg' alt='Error' width='80px' />
			<h2>{message}</h2>
		</div>
	);
};

export default Error;
