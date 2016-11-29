import React from 'react';
import ReactDom from 'react-dom';
import auth from './Auth.jsx';
import { Router, hashHistory } from 'react-router';



export default class Logout extends React.Component {
    componentDidMount() {
        auth.logout();

        hashHistory.push('/login');
    }

    render() {
        return (
            <div>
                <p>You are now logged out</p>
            </div>
        )
    }
}

