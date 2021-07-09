const getTargetUser = (users, loggedUser) => {
	//Find user target that doesnt correspond with our Logged User
	const target = users.filter(userInfo => {
		if (userInfo.user._id !== loggedUser.id) {
			return userInfo;
		}
	});

	return target[0];
};

export default getTargetUser;
