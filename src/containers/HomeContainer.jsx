import React from 'react';

import HomeHeader from '../components/HomeHeader';
import Messages from '../components/Messages';
import HomeFooter from '../components/HomeFooter';

const HomeContainer = () => {
	return (
		<>
			<HomeHeader />
			<Messages />
			<HomeFooter />
		</>
	);
};

export default HomeContainer;
