import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { getFindUsers } from '../actions/user';
import { getChats } from '../actions/chats';

import SearchBar from '../components/FilterChats';
import ChatThumbnail from '../components/ChatThumbnail';

const FindContainer = props => {
	const [users, setUsers] = useState([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (props.chats.length === 0) {
			props.getChats();
		}

		if (props.findUsers.length === 0) {
			props.getFindUsers();
		}
	}, []);

	//Charge users State when the data have been retrieved
	useEffect(() => {
		setUsers(props.findUsers);
	}, [props.findUsers.length]);

	const handleSearch = search => {
		axios
			.get(`/user/search?username=${search}`)
			.then(({ data }) => setUsers(data))
			.catch(err => console.log(err));
	};

	//Handle Query Change
	const handleChange = value => {
		if (value) {
			setQuery(value);
		} else {
			setQuery(value);
			setUsers(props.findUsers);
		}
	};

	return (
		<section className='find__container'>
			<div className='find__header'>
				<Link to='/' className='find--back '>
					<div className='goBack'></div>
				</Link>
				<SearchBar onSubmit={handleSearch} query={query} setQuery={handleChange} />
				<h2 className='find--title'>Recommended Users</h2>
			</div>
			<section className='chatsThumbnail__container'>
				{props.usersRelated.length > 0 &&
					users.map(user => {
						//Render only unrelated users
						if (props.usersRelated.includes(user._id) === false) {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(FindContainer);
