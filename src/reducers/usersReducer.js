const initialState = [{
    fetching: false,
    fetched: false,
    users: [],
    loginData: {},
    error: null
}]
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "FETCH_USERS_PENDING": {
            return { state, fetching: true }
            break;
        }
        case "FETCH_USERS_REJECTED": {
            return { state, fetching: false, error: action.payload }
            break;
        }
        case "FETCH_USERS_FULFILLED": {
            return { state, fetching: false, fetched: true, users: action.payload }
            break;
        }
        case "FETCH_AUTH_FULFILLED": {
            return {loginData:action.payload}
            break;
        }
        case "FETCH_AUTH_FULFILLED": {
            return { state, fetching: false, error: action.payload }
            break;
        }
        default:
            return state;
    }
}


