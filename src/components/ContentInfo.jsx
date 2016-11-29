import React from 'react';
<<<<<<< HEAD
=======
import CommentBox from './Comment/CommentBox.jsx'
>>>>>>> 5a88520246291938171233a829a6c8d57a25619b

export default class Css extends React.Component {
  render() {
      const {params} = this.props;
    return(
      <div>
        <h1>ArticleId:{params.articleId}</h1>
<<<<<<< HEAD
=======
        <CommentBox />
>>>>>>> 5a88520246291938171233a829a6c8d57a25619b
      </div>
    )
  }
}
