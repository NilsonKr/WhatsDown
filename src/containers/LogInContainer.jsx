import React from 'react';

import googleIcon from '../../assets/googleIcon.svg';
import headerIcon from '../../assets/headerIcon.svg';
import footerBg from '../../assets/footerBg.png';

const LogInContainer = () => {
	return (
		<section className='login__container'>
			<header className='login__header'>
				<img src={headerIcon} alt='Header' />
				<h2>Log-In</h2>
			</header>
			<div className='login__body'>
				<div className='login__social'>
					<img src={googleIcon} alt='Google' />
					<p>oogle</p>
				</div>
				<div className='login__separator--wrap'>
					<div className='text-separator'>
						<h3>Or Login Using Email</h3>
					</div>
				</div>
				<form className='login__form'>
					<label className='login__form--input'>
						EMAIL
						<input type='email' placeholder='user@example.com' />
					</label>
					<label className='login__form--input'>
						PASSWORD
						<input type='password' />
					</label>
				</form>
				<p className='forgot--password'>Forgot Password ?</p>
				<button className='login--enter'>Log In</button>
				<p className='login--newUser'>
					New to WhatsDown ? <span>Sign Up</span>
				</p>
			</div>
			<footer className='login__footer'>
				<img src={footerBg} alt='Login Footer' />
			</footer>
		</section>
	);
};

export default LogInContainer;
