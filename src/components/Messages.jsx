import React from 'react';
import { Link } from 'react-router-dom';

import userImg from '../../assets/user.svg';

const Messages = () => {
	return (
		<section className='messages__container'>
			<Link to='/chat' className='messages__chat'>
				<div className='messages__profile'>
					<img src={userImg} alt='' />
					<span className='messages--status'>🦄</span>
				</div>
				<div className='messages__chat--info'>
					<h2>Nilson Diaz</h2>
					<p>Hello world Whatsdown!!..</p>
				</div>
				<p className='messages__chat--date'>08:05</p>
			</Link>
			<Link to='/chat' className='messages__chat not-seen'>
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
			</Link>
		</section>
	);
};

export default Messages;
