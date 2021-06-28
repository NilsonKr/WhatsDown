import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import getGravatarUrl from '../utils/gravatar';

import 'emoji-mart/css/emoji-mart.css';

const ProfileView = props => {
	const { openPicker, setPicker, user, updateInfo, emoji, updateEmoji } = props;
	//Handle Current user inputs information
	const [info, setInfo] = useState(user);

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
								onSelect={emoji => updateEmoji(emoji.native)}
								style={{ width: '100%', height: '100%' }}
							/>
						</div>
					)}
				</div>
				<div className='profile__text'>
					<h2>{info.name}</h2>
					<p>{info.description}</p>
				</div>
			</div>
			<div className='profile__inputs'>
				<label className='profile--input'>
					<h2>Complete Name</h2>
					<input
						type='text'
						name='Name'
						placeholder='Set your name.'
						value={info.name}
						onChange={ev => setInfo({ ...info, name: ev.target.value })}
						onBlur={ev => updateInfo({ name: ev.target.value }, 'name')}
					/>
				</label>
				<label className='profile--input'>
					<h2>Description</h2>
					<input
						type='text'
						name='Name'
						placeholder='Set your description.'
						value={info.description}
						onChange={ev => setInfo({ ...info, description: ev.target.value })}
						onBlur={ev => updateInfo({ description: ev.target.value }, 'description')}
					/>
				</label>
			</div>
		</>
	);
};

export default ProfileView;
