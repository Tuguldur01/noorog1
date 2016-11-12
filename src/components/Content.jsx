import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { connect } from 'react-redux';
import * as articlesAction from '../actions/articlesAction.jsx';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
function mapStateToProps(state) {
    return { articles: state.articles };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(articlesAction, dispatch) };
}


export class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            articles: this.props.actions.fetchArticles()
        })
    }

    render() {
        var imgUrl = require("file!../image/NYV.jpg");
        var avatar = require("file!../assets/img/kendall.jpg");

        var response = this.props.articles;
        if (this.props.articles.articles) {
            var news = this.props.articles.articles.map(function(article) {
                return (
                    <div className="col-md-4 col-sm-6" key={article._id}>
                        <div className="card-container" >
                            <div className="card">
                                <div className="front">
                                    <div className="cover">
                                        <img src={imgUrl} />
                                    </div>
                                    <div className="user">
                                        <img className="img-circle" src={avatar} />
                                    </div>
                                    <div className="content">
                                        <div className="main">
                                            <h3 className="name">{article.caption}</h3>
                                            <p className="profession">{article.createdDate}</p>
                                            <p className="text-center">{article.description}</p>
                                        </div>
                                        <div className="footer">
                                            <div className="rating">
                                                <i className="fa fa-mail-forward" /> Auto Rotation
                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="header">
                                        <h5 className="motto"><button className="btn btn-success">{<Link to={`/content/${article._id}`}>Дэлгэрэнгүй</Link>}</button></h5>
                                    </div>
                                    <div className="content">
                                        <div className="main">
                                            <h4 className="text-center">Job Description</h4>
                                            <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>
                                            <div className="stats-container">
                                                <div className="stats">
                                                    <h4>235</h4>
                                                    <p>
                                                        Followers
                    </p>
                                                </div>
                                                <div className="stats">
                                                    <h4>114</h4>
                                                    <p>
                                                        Following
                    </p>
                                                </div>
                                                <div className="stats">
                                                    <h4>35</h4>
                                                    <p>
                                                        Projects
                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="social-links text-center">
                                            <a href="/" className="facebook"><i className="fa fa-facebook fa-fw" /></a>
                                            <a href="/" className="google"><i className="fa fa-google-plus fa-fw" /></a>
                                            <a href="/" className="twitter"><i className="fa fa-twitter fa-fw" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                );
            });
        }
        return (
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                    {news}
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)