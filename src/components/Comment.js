import React, { Component } from 'react';
import CommentBox from './comments/CommentBox';

export default class Comment extends Component {
  render() {
    var backImg = require("file!../assets/img/city.jpg");
    var devStyle = {
        backgroundImage: 'url(' + backImg + ')',
    }
    return(
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
                            <h1>Comment</h1>
                            <CommentBox url='http://localhost:3001/api/comments'
                              pollInterval={2000}
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
