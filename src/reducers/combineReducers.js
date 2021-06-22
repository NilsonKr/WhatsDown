import { combineReducers } from 'redux';
import user from './user';
import chats from './chats';

export default combineReducers({
	user,
	chats,
});
