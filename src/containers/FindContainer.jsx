import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFindUsers } from '../actions/user';
import { getChats } from '../actions/chats';
import { setRelatedUsers } from '../actions/user';

import SearchBar from '../components/FilterChats';
import ChatThumbnail from '../components/ChatThumbnail';

const FindContainer = props => {
	console.log(props);

	useEffect(() => {
		if (props.chats.length === 0) {
			props.getChats();
		}

		if (props.findUsers.length === 0) {
			props.getFindUsers();
		}

		//Set Users Related to filter other Users
		if (props.chats.length > 0 && props.usersRelated.length === 0) {
			props.setRelatedUsers(props.chats);
		}
	}, [props.chats.length]);

	return (
		<section className='find__container'>
			<div className='find__header'>
				<Link to='/' className='find--back '>
					<div className='goBack'></div>
				</Link>
				<SearchBar />
				<h2 className='find--title'>Recommended Users</h2>
			</div>
			<section className='chatsThumbnail__container'>
				{props.usersRelated.length > 0 &&
					props.findUsers.map(user => {
						//Render only unrelated users
						if (!props.usersRelated.includes(user._id)) {
							return (
								<ChatThumbnail
									key={user._id}
									name={user.name}
									info={user.description}
									emoji={user.status}
									email={user.email}
								/>
							);
						}
					})}
			</section>
		</section>
	);
};

const mapStateToProps = ({ findUsers, usersRelated, chats }) => ({ findUsers, usersRelated, chats });
const mapDispatchToProps = {
	getFindUsers,
	getChats,
	setRelatedUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindContainer);
