import {
    hashHistory
} from 'react-router';
import {
    CHECK_AUTH
} from './authReducer';


const initialState = [{
    fetching: false,
    fetched: false,
    user: null,
    error: null,
    _jwt: null,
}]

export function authCheck(data) {
    return {
        type: 'CHECK_AUTH',
        data
    }
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case "FETCH_AUTH_FULFILLED":
            {
                if (action.payload.success == false) {
                    console.log(action.payload.message);
                } else {
                    localStorage.setItem('token', action.payload.message.token);
                    hashHistory.push('/');
                }
                return {}
                break;
            }
        case "FETCH_AUTH_REJECTED":
            {
                return {
                    state,
                    fetching: false,
                    error: action.payload
                }
                break;
            }
        case "FETCH_USER_GET":
            {
                return Object.assign({}, state, {
                    user: action.payload
                }) 
                break;
            }
        case "FETCH_USER_GETREJECTED":
            {
                return {
                    fetching: false,
                    error: action.payload
                }
                break;
            }
        default:
            return state;
    }
}