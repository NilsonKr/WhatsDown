import { combineReducers } from 'redux';
import user from './user';
import chats from './chats';
import findUsers from './findUsers';
import usersRelated from './usersRelated';

export default combineReducers({
	user,
	chats,
	findUsers,
	usersRelated,
});
