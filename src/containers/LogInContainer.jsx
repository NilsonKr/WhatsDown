import React from 'react';

import googleIcon from '../../assets/googleIcon.svg';
import headerIcon from '../../assets/headerIcon.png';
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
			</div>
			<footer className='login__footer'>
				<img src={footerBg} alt='Login Footer' />
			</footer>
		</section>
	);
};

export default LogInContainer;
