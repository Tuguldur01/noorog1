import React, { Component } from 'react';
import Comment from './Comment';
// import style from './style';

export default class CommentList extends Component {
  render() {
    let nodes = this.props.data.map(comment => {
      return(
        <Comment author={ comment.author } key={ comment._id }>
        { comment.text}
        </Comment>
      )
    })
    return(
      <div>
        {nodes}
      </div>
    )
  }
}
