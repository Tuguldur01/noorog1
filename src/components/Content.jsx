import React from 'react';

import request from 'superagent';

import { Link } from 'react-router'


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
    var news = this.state.articles.map(function (article) {
      return (
        <div key={article._id}>
          <h2>{article.caption}</h2>
          <p>{article.description}</p>
          <Link >Дэлгэрэнгүй</Link>
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
