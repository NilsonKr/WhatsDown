import React from 'react';

import findIcon from '../../assets/findIcon.svg';

const FilterChats = () => {
	return (
		<div className='filterChats'>
			<img src={findIcon} alt='Find Chat' />
			<input type='text' placeholder='Search' />
		</div>
	);
};

export default FilterChats;
