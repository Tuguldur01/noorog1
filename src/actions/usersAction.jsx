import axios from 'axios';

export function fetchUsers() {
    return function (dispatch) {
        axios.get("http://rest.learncode.academy/api/wstern/users")
            .then((response) => {
                dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_USERS_REJECTED", payload: err })
            })
    }
}

export function loginUser(data) {
    return function (dispatch) {
        axios.post("http://blogapi-92244.onmodulus.net/api/authenticate", JSON.stringify(data), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then((response) => {
                dispatch({ type: "FETCH_AUTH_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_AUTH_REJECTED", payload: err })
            })  
    }
}