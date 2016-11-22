module.exports = {
    getToken() {
        return localStorage.token
    },

    logout(cb) {
        delete localStorage.removeItem('token');
    },

    loggedIn() {
        return !!localStorage.token
    },

    onChange() { }
}
