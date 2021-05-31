import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';
import ProfileIcon from '../../assets/user.svg';

const EmojiPickerStyles = {
	position: 'absolute',
	bottom: '0',
	left: '0',
	transform: 'translateY(100%)',
	width: '250px',
	height: '250px',
	overflow: 'hidden',
};

const ProfileContainer = () => {
	const [emoji, setEmoji] = useState(' ');

	return (
		<section className='profile__container'>
			<Link to='/' className='profile--back'>
				<div className='goBack'></div>
			</Link>
			<div className='profile__info'>
				<div className='profile__img'>
					<img src={ProfileIcon} alt='User' />
					<span>{emoji}</span>
					<Picker
						set='apple'
						onSelect={emoji => setEmoji(emoji.native)}
						style={EmojiPickerStyles}
					/>
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
		</section>
	);
};

export default ProfileContainer;
