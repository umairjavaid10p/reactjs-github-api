import { combineReducers } from 'redux';
import modal from './modal';
import user from './user';
import api from './api';

export default combineReducers({
    modal,
    user,
    api,
});