import axios from 'axios';
import qs from 'qs';
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

export function loginUser(email, password) {
    return function (dispatch) {
        axios.post("http://blogapi-92244.onmodulus.net/api/authenticate", qs.stringify({ email: email, password: password }), {
            headers: {
                'Accept': 'application/json',
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