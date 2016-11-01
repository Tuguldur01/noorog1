import axios from 'axios';

export function fetchArticles() {
    return function (dispatch) {
        axios.get("http://blogapi-92244.onmodulus.net/api/articles?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0NzcyMjU4Mzl9.LC1tbqL6vHvPqA2GQ-cjmWAJC1TGvM3CGe88WhzfHHw")
            .then((response) => {
                dispatch({ type: "FETCH_ARTICLES_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ARTICES_REJECTED", payload: err })
            })
    }
}