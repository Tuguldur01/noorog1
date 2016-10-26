import React from 'react';
import {Link} from 'react-router'

export default class Content extends React.Component {
  render() {
    return(
      <div>
        <h2>garchig</h2>
        <Link to="/post/1">Дэлгэрэнгүй</Link>
      </div>
    )
  }
}
