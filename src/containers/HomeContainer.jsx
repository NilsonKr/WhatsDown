import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChats } from '../actions/chats';

import HomeHeader from '../components/HomeHeader';
import ChatThumbnail from '../components/ChatThumbnail';
import HomeFooter from '../components/HomeFooter';

const HomeContainer = props => {
	console.log(props);

	useEffect(() => {
		props.getChats();
	}, []);

	return (
		<>
			<HomeHeader />
			<section className='chatsThumbnail__container'>
				<ChatThumbnail name='Nilson' lastMsg='Hey Whatssupp!' date='09:43 PM' emoji='🦄' />
				<ChatThumbnail
					name='Minari'
					lastMsg='So whatever stuff...'
					// notSeen={true}
					date='08:03 PM'
					emoji='🐧'
				/>
			</section>
			<HomeFooter />
		</>
	);
};

const mapStateToProps = ({ chats }) => ({
	chats,
});

const mapDispatchToProps = {
	getChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
