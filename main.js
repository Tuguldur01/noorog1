import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './src/components/App.jsx';
import Root from './src/components/Root.jsx';
import Content from './src/components/Content.jsx';
import Footer from './src/components/Footer.jsx';
import Profile from './src/components/Profile.jsx';
import Css from './src/components/Css.jsx';
import Post from './src/components/Post.jsx';


ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Root} />
        <Route path = "profile" component = {Profile} />
        <Route path = "css" component = {Css} />
        <Route path = "content" component = {Content} />
        <Route path = "footer" component = {Footer} />
        <Route path = "post/1" component = {Post} />
     </Route>
  </Router>
), document.getElementById('app'))
