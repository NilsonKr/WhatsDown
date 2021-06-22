import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import getGravatarUrl from '../utils/gravatar';

import 'emoji-mart/css/emoji-mart.css';

const ProfileView = props => {
	const { openPicker, setPicker, user } = props;
	const [emoji, setEmoji] = useState(user.status);

	return (
		<>
			<div className='profile__info'>
				<div className='profile__img'>
					<img src={getGravatarUrl(user.email)} alt='User' />
					<span id='emojiStatus' onClick={() => setPicker(!openPicker)}>
						{emoji || '😶'}
					</span>
					{openPicker && (
						<div id='EmojiPicker' className='profile--emojiPicker' onClick={ev => ev.stopPropagation()}>
							<Picker
								set='apple'
								onSelect={emoji => setEmoji(emoji.native)}
								style={{ width: '100%', height: '100%' }}
							/>
						</div>
					)}
				</div>
				<div className='profile__text'>
					<h2>{user.name}</h2>
					<p>{user.description}</p>
				</div>
			</div>
			<div className='profile__inputs'>
				<label className='profile--input'>
					<h2>Complete Name</h2>
					<input
						type='text'
						name='Name'
						placeholder='Set your name.'
						value={user.name}
						onChange={ev => console.log(ev.target.value)}
					/>
				</label>
				<label className='profile--input'>
					<h2>Description</h2>
					<input
						type='text'
						name='Name'
						placeholder='Set your description.'
						value={user.description}
						onChange={ev => console.log(ev.target.value)}
					/>
				</label>
			</div>
		</>
	);
};

export default ProfileView;
