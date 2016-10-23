import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './src/components/App.jsx';
import Root from './src/components/Root.jsx';
import Content from './src/components/Content.jsx';
import Footer from './src/components/Footer.jsx';
import Profile from './src/components/Profile.jsx';
import Settings from './src/components/Settings.jsx'


ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Root} />
        <Route path = "profile" component = {Profile} />
        <Route path = "settings" component = {Settings} />
        <Route path = "content" component = {Content} />
        <Route path = "footer" component = {Footer} />
     </Route>
  </Router>
), document.getElementById('app'))
