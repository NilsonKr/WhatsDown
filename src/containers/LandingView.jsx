import React from 'react';
import { Link } from 'react-router-dom';

import ChatView from '../../assets/LandingChat.jpg';

const LandingView = () => {
	return (
		<section className='landing__container'>
			<div className='bg__el bg--left'></div>
			<div className='bg__el bg--right'></div>
			<div className='chat__view'>
				<img src={ChatView} alt='Chat Preview' />
			</div>
			<div className='landing__info'>
				<h2 className='landing--tittle'>WhatsDown</h2>
				<p className='landing--text'>
					Stay touch with your acquaintances, will make your life easier, regarding organizing your social
					life, What are you waiting for Join Us!?
				</p>
			</div>
			<Link to='/signUp' className='landing--singup'>
				Sign Up
			</Link>
			<Link to='/logIn' className='landing--login'>
				Have an Account Already? Sign in
			</Link>
		</section>
	);
};

export default LandingView;
