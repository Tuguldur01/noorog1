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
        var backImg = require("file!../assets/img/city.jpg");
        var devStyle = {
            backgroundImage: 'url(' + backImg + ')',
        }
        var imgUrl = require("file!../image/NYV.jpg");
        var avatar = require("file!../assets/img/kendall.jpg");
        var postImg = require("file!../assets/img/lifestyle-2.jpg");
        var response = this.props.articles;
        if (this.props.articles.articles) {
            var news = this.props.articles.articles.map(function (article) {
                return (
                    <div className="card-box col-md-4 col-sm-6" key={article._id}>
                        <div className="news-card" >
                            <div className="header" style={{backgroundImage: 'url('+ require("file!../assets/img/lifestyle-2.jpg")+ ')', backgroundPosition: 'center center', backgroundSize: 'cover'}} >
                                <img src={postImg} />
                                <div className="social-line social-line-visible" data-buttons={4}>
                                    <button className="btn btn-social btn-facebook">
                                        <i className="fa fa-facebook" />
                                    </button>
                                    <button className="btn btn-social btn-twitter">
                                        <i className="fa fa-twitter" />
                                    </button>
                                    <button className="btn btn-social btn-pinterest">
                                        <i className="fa fa-pinterest" />
                                    </button>
                                    <button className="btn btn-social btn-google">
                                        <i className="fa fa-google-plus" />
                                    </button>
                                </div>
                            </div>
                            <div className="content">
                                <h6 className="category">News</h6>
                                <h4 ><Link to={`/content/${article._id}`} className="title"> {article.caption} </Link></h4>
                                <p className="description">{article.description}</p>
                            </div>
                        </div> {/* end card */}
                    </div>
                );
            });
        }
        return (
            <div className="wrapper">
                <div className="header header-filter" style={devStyle} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="brand">
                                    <h1>News Blog</h1>
                                    <h3>A Badass Bootstrap UI Kit based on Material Design.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main main-raised">
                    <div className="section section-basic">
                        <div className="container">
                            <div className="masonry-container">
                                <div className="row">
                                    {news}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)