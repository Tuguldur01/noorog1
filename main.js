import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './src/components/App.jsx';
import Header from './src/components/Header.jsx';
import Content from './src/components/Content.jsx';
import Footer from './src/components/Footer.jsx'


ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Footer} />
        <Route path = "header" component = {Header} />
        <Route path = "content" component = {Content} />
        <Route path = "footer" component = {Footer} />
     </Route>
  </Router>
), document.getElementById('app'))
