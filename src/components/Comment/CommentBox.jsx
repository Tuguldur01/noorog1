//CommentBox.js
import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import DATA from './data';
import style from './style';

export default class CommentBox extends React.Component {
   constructor(props) {
     super(props);
     this.state = { data: [] };
   }
   render() {
     return (
       <div style={ style.commentBox }>
         <h2>Comments:</h2>
         <CommentList data={ DATA }/>
         <CommentForm />
       </div>
     )
   }
}
