import React from 'react';

import googleIcon from '../../assets/googleIcon.svg';
import headerIcon from '../../assets/headerIcon.svg';
import footerBg from '../../assets/footerBg.png';

const AuthView = () => {
	return (
		<section className='auth__container'>
			<header className='auth__header'>
				<img src={headerIcon} alt='Header' />
				<h2>Log-In</h2>
			</header>
			<div className='auth__body'>
				<div className='auth__social'>
					<img src={googleIcon} alt='Google' />
					<p>oogle</p>
				</div>
				<div className='auth__separator--wrap'>
					<div className='text-separator'>
						<h3>Or Login Using Email</h3>
					</div>
				</div>
				<form className='auth__form'>
					<label className='auth__form--input'>
						EMAIL
						<input type='email' placeholder='user@example.com' />
					</label>
					<label className='auth__form--input'>
						PASSWORD
						<input type='password' />
					</label>
				</form>
				<p className='forgot--password'>Forgot Password ?</p>
				<button className='auth--enter'>Log In</button>
				<p className='auth--newUser'>
					New to WhatsDown ? <span>Sign Up</span>
				</p>
			</div>
			<footer className='auth__footer'>
				<img src={footerBg} alt='auth Footer' />
			</footer>
		</section>
	);
};

export default AuthView;
