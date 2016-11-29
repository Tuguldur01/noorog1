import React from 'react';

export default class Css extends React.Component {
  render() {
      const {params} = this.props;
    return(
      <div>
        <h1>ArticleId:{params.articleId}</h1>
      </div>
    )
  }
}
