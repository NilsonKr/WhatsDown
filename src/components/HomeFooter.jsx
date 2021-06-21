import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
	return (
		<footer className='Home__footer'>
			<Link to='/profile'>
				<img src='assets/profile.svg' alt='Profile' />
			</Link>
		</footer>
	);
};

export default HomeFooter;
