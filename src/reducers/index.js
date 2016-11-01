import {combineReducers} from 'redux';

import users from './usersReducer';
import articles from './articlesReducer';

export default combineReducers({
    articles,
    users
})