import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import axios from 'axios';
import style from './style';

export default class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
    this.loadCommentFromServer = this.loadCommentFromServer.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }
  loadCommentFromServer() {
    axios.get(this.props.url).then(res=>{
      this.setState({data: res.data})
    })
  }
  handleCommentSubmit(comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    axios.post(this.props.url, comment)
    .then(res => {
    this.setState({ data: res });
    })
    .catch(err => {
    console.error(err);
    });
  }
  componentDidMount() {
  this.loadCommentFromServer();
  setInterval(this.loadCommentFromServer, this.props.pollInterval);
  }
  render() {
    return(
      <div>
        <CommentList data={ this.state.data }/>
        <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
      </div>
    )
  }
}
