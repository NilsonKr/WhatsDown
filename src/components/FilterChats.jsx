import React, { useRef, useState } from 'react';

const FilterChats = props => {
	const searchInput = useRef(null);

	return (
		<div className='filterChats'>
			<img src='assets/findIcon.svg' alt='Find Chat' />
			<input
				ref={searchInput}
				type='text'
				placeholder='Search'
				value={props.query}
				onChange={() => props.setQuery(searchInput.current.value)}
			/>
		</div>
	);
};

export default FilterChats;
