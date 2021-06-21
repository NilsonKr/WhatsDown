import React from 'react';
import { Link } from 'react-router-dom';

import FilterChats from './FilterChats';

const HomeHeader = () => {
	return (
		<div className='home'>
			<div className='home--head'>
				<FilterChats />
				<div className='messages-head'>
					<h2>Messages</h2>
					<Link to='/find'>
						<img src='assets/plusIcon.svg' alt='' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
