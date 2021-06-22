import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProfileView from '../components/ProfileView';

const ProfileContainer = props => {
	console.log(props.user);

	const [openPicker, setPicker] = useState(false);

	//Handle EmojiPicker Display
	const handleCloseEmojis = ev => {
		const target = ev.target;

		if (target.id === 'emojiStatus') {
			return;
		}

		setPicker(false);
	};

	return (
		<section className='profile__container' onClick={handleCloseEmojis}>
			<Link to='/' className='profile--back'>
				<div className='goBack'></div>
			</Link>
			<ProfileView openPicker={openPicker} setPicker={setPicker} />
		</section>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(ProfileContainer);
