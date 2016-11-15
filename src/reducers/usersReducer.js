import {
    browserHistory
} from 'react-router';



const initialState = [{
    fetching: false,
    fetched: false,
    users: [],
    loginData: {},
    error: null
}]

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "FETCH_USERS_PENDING":
            {
                return {
                    state,
                    fetching: true
                }
                break;
            }
        case "FETCH_USERS_REJECTED":
            {
                return {
                    state,
                    fetching: false,
                    error: action.payload
                }
                break;
            }
        case "FETCH_USERS_FULFILLED":
            {
                return {
                    state,
                    fetching: false,
                    fetched: true,
                    users: action.payload
                }
                break;
            }
        case "FETCH_AUTH_FULFILLED":
            {
                if (action.payload.success == false) {
                    console.log(action.payload.message);
                } else {
                    localStorage.setItem('token', action.payload.message.token);
                    browserHistory.push('/')
                }
                return {
                    users: action.payload
                }
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
        default:
            return state;
    }
}