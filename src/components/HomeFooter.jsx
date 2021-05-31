import React from 'react';
import { Link } from 'react-router-dom';

import profileIcon from '../../assets/profile.svg';

const HomeFooter = () => {
	return (
		<footer className='Home__footer'>
			<Link to='/profile'>
				<img src={profileIcon} alt='Profile' />
			</Link>
		</footer>
	);
};

export default HomeFooter;
