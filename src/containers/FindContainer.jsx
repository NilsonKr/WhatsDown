import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFindUsers } from '../actions/user';

import SearchBar from '../components/FilterChats';
import ChatThumbnail from '../components/ChatThumbnail';

const FindContainer = props => {
	useEffect(() => {
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
				{props.findUsers.length &&
					props.findUsers.map(user => {
						return (
							<ChatThumbnail
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

const mapStateToProps = ({ findUsers }) => ({ findUsers });
const mapDispatchToProps = {
	getFindUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindContainer);
