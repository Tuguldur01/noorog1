import {combineReducers} from 'redux';

import user from './usersReducer';
import articles from './articlesReducer';
import auth from './authReducer';
export default combineReducers({
    articles,
    auth,
    user
})