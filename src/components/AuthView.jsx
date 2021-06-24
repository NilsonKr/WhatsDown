import React from 'react';
import { Link } from 'react-router-dom';

const AuthView = ({ view, submitAction, fillForm }) => {
	const isLogin = view === 'login';

	return (
		<section className='auth__container'>
			<header className='auth__header'>
				<img src='assets/headerIcon.svg' alt='Header' width='25px' />
				<h2>{isLogin ? 'Log-In' : 'Sign-Up'}</h2>
			</header>
			<div className='auth__body'>
				<div className='auth__social'>
					<img src='assets/googleIcon.svg' alt='Google' />
					<p>oogle</p>
				</div>
				<div className='auth__separator--wrap'>
					<div className='text-separator'>
						<h3>Or {isLogin ? 'Log In' : 'Sign Up'} Using Email</h3>
					</div>
				</div>
				<form className='auth__form'>
					{!isLogin && (
						<label className='auth__form--input'>
							FULL NAME
							<input type='text' name='name' placeholder='Your Name' onChange={fillForm} />
						</label>
					)}
					<label className='auth__form--input'>
						EMAIL
						<input type='email' name='email' placeholder='user@example.com' onChange={fillForm} />
					</label>
					<label className='auth__form--input'>
						PASSWORD
						<input type='password' name='password' onChange={fillForm} />
					</label>
				</form>
				<div className='auth--options'>
					{isLogin ? (
						<>
							<label className='rememberme'>
								<input type='checkbox' />
								Remember Me
							</label>
							<p className='forgot--password'> Forgot Password ?</p>
						</>
					) : (
						<p className='accept--terms'>
							I accept the <b>Terms & Conditions</b>
						</p>
					)}
				</div>
				<button className='auth--enter' onClick={submitAction}>
					{isLogin ? 'Log In' : 'Create an Account'}
				</button>
				<p className='auth--newUser'>
					{isLogin ? 'New to WhatsDown ?' : 'Existing Member ? '}{' '}
					{isLogin ? <Link to='/signUp'>Sign Up</Link> : <Link to='/logIn'>Sign In</Link>}
				</p>
			</div>
			<footer className='auth__footer'>
				<img src={isLogin ? 'assets/footerBg.png' : 'assets/footerBg2.png'} alt='auth Footer' />
			</footer>
		</section>
	);
};

export default AuthView;
