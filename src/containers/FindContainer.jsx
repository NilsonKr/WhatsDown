import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFindUsers } from '../actions/user';
import { getChats } from '../actions/chats';

import SearchBar from '../components/FilterChats';
import ChatThumbnail from '../components/ChatThumbnail';

const FindContainer = props => {
	useEffect(() => {
		if (props.chats.length === 0) {
			props.getChats();
		}

		if (props.findUsers.length === 0) {
			props.getFindUsers();
		}
	}, []);

	return (
		<section className='find__container'>
			<div className='find__header'>
				<Link to='/' className='find--back '>
					<div className='goBack'></div>
				</Link>
				<SearchBar />
			</div>
			<section className='chatsThumbnail__container'>
				{props.findUsers.length > 0 &&
					props.findUsers.map(user => {
						return (
							<ChatThumbnail
								key={user._id}
								name={user.name}
								info={user.description}
								emoji={user.status}
								email={user.email}
							/>
						);
					})}
			</section>
		</section>
	);
};

const mapStateToProps = ({ findUsers, chats }) => ({ findUsers, chats });
const mapDispatchToProps = {
	getFindUsers,
	getChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindContainer);
