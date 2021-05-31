import React from 'react';

import userImg from '../../assets/user.svg';

const Messages = () => {
	return (
		<section className='messages__container'>
			<div className='messages__chat'>
				<div className='messages__profile'>
					<img src={userImg} alt='' />
					<span className='messages--status'>🦄</span>
				</div>
				<div className='messages__chat--info'>
					<h2>Nilson Diaz</h2>
					<p>Hello world Whatsdown!!..</p>
				</div>
				<p className='messages__chat--date'>08:05</p>
			</div>
			<div className='messages__chat not-seen'>
				<div className='messages__profile'>
					<img src={userImg} alt='' />
					<span className='messages--status'>🐧</span>
				</div>
				<div className='messages__chat--info'>
					<h2>
						Minari <span className='chat--notifaction'></span>
					</h2>
					<p>So whatever stuff</p>
				</div>
				<p className='messages__chat--date'>08:05</p>
			</div>
		</section>
	);
};

export default Messages;
