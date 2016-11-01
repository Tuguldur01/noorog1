import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';
import { connect } from 'react-redux';
import * as articlesAction from '../actions/articlesAction.jsx';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
function mapStateToProps(state) {
  return { articles: state.articles };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(articlesAction, dispatch) };
}


const styles = {
  root: {
    width: 800,
    margin: 'auto',
  },
  gridList: {
    width: 800,
    height: 450,
    overflowY: 'auto',
  },
};


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
    var response = this.props.articles;
    if (this.props.articles.articles) {
      var news = this.props.articles.articles.map(function (article) {
        return (
          <div style={styles.root} key={article._id}>
            <Card>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar={imgUrl}
                />
              <CardMedia
                overlay={<CardTitle title={article.caption} subtitle={article.description} />}
                >
                <img src={imgUrl} />
              </CardMedia>
              <CardTitle title={article.caption} subtitle={article.description} />
              <CardText>
                {article.description}
              </CardText>
              <CardActions>
                <FlatButton label={<Link to={`/content/${article._id}`}>Дэлгэрэнгүй</Link>} />
              </CardActions>
            </Card>
          </div>
        );
      });
    }
    return (
      <div>
        {news}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)