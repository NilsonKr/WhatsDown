import React from 'react';

import HomeHeader from '../components/HomeHeader';
import ChatThumbnail from '../components/ChatThumbnail';
import HomeFooter from '../components/HomeFooter';

const HomeContainer = () => {
	return (
		<>
			<HomeHeader />
			<section className='chatsThumbnail__container'>
				<ChatThumbnail name='Nilson' info='Hey Whatssupp!' date='09:43 PM' emoji='🦄' />
				<ChatThumbnail
					name='Minari'
					info='So whatever stuff...'
					notSeen={true}
					date='08:03 PM'
					emoji='🐧'
				/>
			</section>
			<HomeFooter />
		</>
	);
};

export default HomeContainer;
