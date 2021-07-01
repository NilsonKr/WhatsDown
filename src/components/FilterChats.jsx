import React, { useRef } from 'react';

const FilterChats = props => {
	const searchInput = useRef(null);

	return (
		<div className='filterChats'>
			<img src='assets/findIcon.svg' alt='Find Chat' />
			<form
				onSubmit={ev => {
					ev.preventDefault();
					props.onSubmit(searchInput.current.value);
				}}
			>
				<input
					ref={searchInput}
					type='text'
					placeholder='Search'
					value={props.query}
					onChange={() => props.setQuery(searchInput.current.value)}
				/>
			</form>
		</div>
	);
};

export default FilterChats;
