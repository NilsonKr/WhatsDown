import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/FilterChats';

const FindContainer = () => {
	return (
		<section className='find__container'>
			<Link to='/' className='profile--back'>
				<div className='goBack'></div>
			</Link>
			<SearchBar />
		</section>
	);
};

export default FindContainer;
