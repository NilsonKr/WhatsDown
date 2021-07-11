import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

import AuthView from '../components/AuthView';

const SignUpContainer = props => {
	const [userInfo, setUserInfo] = useState({});

	const handleSignUp = () => {
		props.signup(userInfo, 'login');
	};

	const handleInputs = ev => {
		const field = ev.target;

		setUserInfo({ ...userInfo, [field.name]: field.value });
	};

	return (
		<>
			<AuthView
				view='signup'
				submitAction={handleSignUp}
				fillForm={handleInputs}
				isLoading={props.dataState.loading}
				isError={props.dataState.error}
			/>
		</>
	);
};

const mapDispatchToProps = {
	signup,
};

const mapStateToProps = ({ dataState }) => ({ dataState });

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
