import React from 'react';
import CommentBox from './Comment/CommentBox.jsx'

export default class Css extends React.Component {
  render() {
      const {params} = this.props;
    return(
      <div>
        <h1>ArticleId:{params.articleId}</h1>
        <CommentBox />
      </div>
    )
  }
}
