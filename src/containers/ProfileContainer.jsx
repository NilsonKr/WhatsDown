import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ProfileIcon from '../../assets/user.svg';

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
