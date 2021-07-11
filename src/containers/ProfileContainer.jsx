import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateInfo } from '../actions/user.js';

import ProfileView from '../components/ProfileView';

const ProfileContainer = props => {
	const [openPicker, setPicker] = useState(false);
	const [currentEmoji, setEmoji] = useState(props.user.status);

	const handleUpdateInfo = (info, field) => {
		//Update only if it has changed
		if (props.user[field] !== info[field]) {
			props.updateInfo({ user: { ...props.user, ...info }, updated: { ...info } });
		}
	};

	//Handle EmojiPicker Display
	const handleCloseEmojis = ev => {
		const target = ev.target;

		if (target.id === 'emojiStatus') {
			return;
		}

		//Update Emoji
		if (currentEmoji !== props.user.status) {
			handleUpdateInfo({ status: currentEmoji }, 'status');
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
			<div className='info_upload'>
				<img src='/assets/warning.svg' alt=' upload image information' width='30px' />
				<p>
					The image upload will be available in future releases, Meanwhile you can use{' '}
					<a href='https://es.gravatar.com/'>Gravatar</a> to customize your profile
					picture
				</p>
			</div>
		</section>
	);
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = {
	updateInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
