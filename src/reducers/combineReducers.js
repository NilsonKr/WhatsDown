import { combineReducers } from 'redux';
import user from './user';
import chats from './chats';
import findUsers from './findUsers';

export default combineReducers({
	user,
	chats,
	findUsers,
});
