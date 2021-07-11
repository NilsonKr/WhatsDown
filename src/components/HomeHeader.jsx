import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = props => {
	return (
		<div className='home'>
			<div className='home--head'>
				{props.children}
				<div className='messages-head'>
					<h2>Messages</h2>
					<Link to='/find'>
						<img src='assets/plusIcon.svg' alt='' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
