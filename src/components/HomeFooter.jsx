import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';

const HomeFooter = props => {
	return (
		<footer className='Home__footer'>
			<div onClick={props.logout}>
				<img src='assets/logout.svg' alt='Log-out' width='40px' />
			</div>
			<Link to='/profile'>
				<img src='assets/profile.svg' alt='Profile' />
			</Link>
		</footer>
	);
};

const mapDispatchToProps = {
	logout,
};

export default connect(null, mapDispatchToProps)(HomeFooter);
