import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

import AuthView from '../components/AuthView';

const LogInContainer = props => {
	const [loginInfo, setInfo] = useState({});
	const [isRemember, setRemember] = useState(false);

	const handleLoginInfo = ev => {
		const field = ev.target;

		setInfo({ ...loginInfo, [field.name]: field.value });
	};

	const handleSubmit = () => {
		props.login({ ...loginInfo, isRemember });
	};

	const authWithGoogle = () => {
		document.cookie = `isRemember=${isRemember}; max-age=240`;
	};

	return (
		<>
			<AuthView
				view='login'
				fillForm={handleLoginInfo}
				submitAction={handleSubmit}
				isRemember={isRemember}
				rememberPick={setRemember}
				googleAuth={authWithGoogle}
				isLoading={props.dataState.loading}
				isError={props.dataState.error}
			/>
		</>
	);
};

const mapDispatchToProps = {
	login,
};
const mapStateToProps = ({ dataState }) => ({ dataState });

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);
