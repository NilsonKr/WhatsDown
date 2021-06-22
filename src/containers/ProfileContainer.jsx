import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateInfo } from '../actions/user.js';

import ProfileView from '../components/ProfileView';

const ProfileContainer = props => {
	const [openPicker, setPicker] = useState(false);
	const [currentEmoji, setEmoji] = useState(props.user.status);

	const handleUpdateInfo = info => {
		props.updateInfo({ ...props.user, ...info });
	};

	//Handle EmojiPicker Display
	const handleCloseEmojis = ev => {
		const target = ev.target;

		if (target.id === 'emojiStatus') {
			return;
		}

		//Update Emoji
		if (currentEmoji !== props.user.status) {
			props.updateInfo({ ...props.user, status: currentEmoji });
		}
		setPicker(false);
	};

	return (
		<section className='profile__container' onClick={handleCloseEmojis}>
			<Link to='/' className='profile--back'>
				<div className='goBack'></div>
			</Link>
			<ProfileView
				openPicker={openPicker}
				setPicker={setPicker}
				user={props.user}
				emoji={currentEmoji}
				updateEmoji={setEmoji}
				updateInfo={handleUpdateInfo}
			/>
		</section>
	);
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = {
	updateInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
