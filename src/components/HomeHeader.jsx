import React from 'react';

import FilterChats from './FilterChats';

import plusIcon from '../../assets/plusIcon.svg';

const HomeHeader = () => {
	return (
		<div className='home'>
			<div className='home--head'>
				<FilterChats />
				<div className='messages-head'>
					<h2>Messages</h2>
					<img src={plusIcon} alt='' />
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
