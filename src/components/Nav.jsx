import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
import Footer from './Footer.jsx';

export default class Nav extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if ($(document).scrollTop() > 260) {
            if (transparent) {
                transparent = false;
                $('.navbar-color-on-scroll').removeClass('navbar-transparent');
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('.navbar-color-on-scroll').addClass('navbar-transparent');
            }
        }
    }
    render() {
        var imgUrl = require("file!../assets/img/logo.png");

        return (
            <div className="index-page">
                <nav className="navbar  navbar-color-on-scroll navbar-transparent  navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a href="">
                                <div className="logo-container">
                                    <div className="logo">
                                        <img src={imgUrl} alt="Creative Tim Logo" rel="tooltip" title="<b>TT team</b> hiiw <b> welcome </b>" data-placement="bottom" data-html="true" />
                                    </div>
                                    <div className="brand">
                                        TT team
                </div>
                                </div>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="navigation-index">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/profile" className="btn">
                                        <i className="material-icons">dashboard</i> Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/content" className="btn">
                                        <i className="material-icons">cloud_download</i> News
                                     </Link>
                                </li>
                                <li>
                                    <Link to="/login" className="btn">
                                        <i className="material-icons">person</i> Login
                                     </Link>
                                </li>
                                <li>
                                    <a rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="/" className="btn btn-simple">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="/" className="btn btn-simple">
                                        <i className="fa fa-facebook-square" />
                                    </a>
                                </li>
                                <li>
                                    <a rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="/" className="btn btn-simple">
                                        <i className="fa fa-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
                <Footer />
            </div >
        )
    }
}
