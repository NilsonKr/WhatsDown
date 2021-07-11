import { combineReducers } from 'redux';
import user from './user';
import chats from './chats';
import findUsers from './findUsers';
import usersRelated from './usersRelated';
import dataState from './dataState';

export default combineReducers({
	dataState,
	user,
	chats,
	findUsers,
	usersRelated,
});
