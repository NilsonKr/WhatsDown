import React, { useState } from 'react';
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';
import ProfileIcon from '../../assets/user.svg';

const ProfileView = ({ openPicker, setPicker }) => {
	const [emoji, setEmoji] = useState('');

	return (
		<>
			<div className='profile__info'>
				<div className='profile__img'>
					<img src={ProfileIcon} alt='User' />
					<span id='emojiStatus' onClick={() => setPicker(!openPicker)}>
						{emoji || '😶'}
					</span>
					<div
						id='EmojiPicker'
						className='profile--emojiPicker'
						onClick={ev => ev.stopPropagation()}
					>
						{openPicker && (
							<Picker
								set='apple'
								onSelect={emoji => setEmoji(emoji.native)}
								style={{ width: '100%', height: '100%' }}
							/>
						)}
					</div>
				</div>
				<div className='profile__text'>
					<h2>Nilson Diaz</h2>
					<p>Hey There! Happy Hacking , Enjoy The App!</p>
				</div>
			</div>
			<div className='profile__inputs'>
				<label className='profile--input'>
					<h2>Complete Name</h2>
					<input
						type='text'
						name='Name'
						placeholder='Set your name.'
						value='Nilson Diaz'
						onChange={ev => console.log(ev.target.value)}
					/>
				</label>
				<label className='profile--input'>
					<h2>Description</h2>
					<input
						type='text'
						name='Name'
						placeholder='Set your description.'
						value='Frontend Developer At Seoul 👨‍💻'
						onChange={ev => console.log(ev.target.value)}
					/>
				</label>
			</div>
		</>
	);
};

export default ProfileView;
