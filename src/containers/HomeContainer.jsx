import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChats } from '../actions/chats';

import HomeHeader from '../components/HomeHeader';
import ChatThumbnail from '../components/ChatThumbnail';
import HomeFooter from '../components/HomeFooter';

const HomeContainer = props => {
	console.log(props);

	useEffect(() => {
		if (props.chats.length === 0) {
			props.getChats();
		}
	}, []);

	const getTargetUser = users => {
		//Find user target that doesnt correspond with our Logged User
		const target = users.filter(userInfo => {
			if (userInfo.user._id !== props.user.id) {
				return userInfo;
			}
		});

		return target[0].user;
	};

	return (
		<>
			<HomeHeader />
			<section className='chatsThumbnail__container'>
				{props.chats.map(chat => {
					const userTarget = getTargetUser(chat.users);

					return (
						<ChatThumbnail
							key={chat._id}
							email={userTarget.email}
							name={userTarget.name}
							info='Hey Whatssupp!'
							date='09:43 PM'
							emoji={userTarget.status}
						/>
					);
				})}
				{/* <ChatThumbnail
					name='Minari'
					lastMsg='So whatever stuff...'
					// notSeen={true}
					date='08:03 PM'
					emoji='🐧'
				/> */}
			</section>
			<HomeFooter />
		</>
	);
};

const mapStateToProps = ({ chats, user, usersRelated }) => ({
	user,
	chats,
});

const mapDispatchToProps = {
	getChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
