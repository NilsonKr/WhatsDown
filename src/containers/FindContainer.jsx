import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/FilterChats';
import ChatThumbnail from '../components/ChatThumbnail';

const FindContainer = () => {
	return (
		<section className='find__container'>
			<div className='find__header'>
				<Link to='/' className='find--back '>
					<div className='goBack'></div>
				</Link>
				<SearchBar />
			</div>
			<section className='chatsThumbnail__container'>
				<ChatThumbnail name='Momoring' info='Love u boo' emoji='🍑' />
				<ChatThumbnail name='Nayeonni' info='hellooo' emoji='🐰' />
				<ChatThumbnail name='Momoring' info='Busy../' emoji='🐱‍👓' />
			</section>
		</section>
	);
};

export default FindContainer;
