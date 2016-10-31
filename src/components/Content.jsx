import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';

import request from 'superagent';

import { Link } from 'react-router'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    var component = this;
    var url = "http://blogapi-92244.onmodulus.net/api/articles?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0NzcyMjU4Mzl9.LC1tbqL6vHvPqA2GQ-cjmWAJC1TGvM3CGe88WhzfHHw";
    request
      .get(url)
      .end(function (err, res) {
        console.log(res);
        var response = res.body;
        component.setState({
          articles: response
        })
      });
  }

  render() {
    var imgUrl = 'http://lorempixel.com/1740/900'

    var news = this.state.articles.map(function (article) {
      return (

        <div key={article._id}>
          <GridList
        cellHeight={180}
        style={styles.gridList}>

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
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </GridList>

        </div>
      );
    });
    return (
      <div>
            {news}
      </div>
          )
  }
}
