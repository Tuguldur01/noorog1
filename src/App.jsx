import React from 'react';
import { Link, Router, Route, IndexRoute, hashHistory } from 'react-router';
import Nav from './components/Nav.jsx';
import Home from './components/Root.jsx';
import Content from './components/Content.jsx';
import CSS from './components/Css.jsx';
import profile from './components/Profile.jsx';
import ContentInfo from './components/ContentInfo.jsx';
import NoMatch from './components/NoMatch.jsx';
import Footer from './components/Footer.jsx';
import login from './components/login.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';

export default class App extends React.Component {
  render() {
    const routes =
      <Route component={Nav} path="/">
        <IndexRoute component={Content} />
        <Route component={Home} path="home" />
        <Route component={Content} path="content" />
        <Route component={ContentInfo} path="content/:articleId" />
        <Route component={CSS} path="css" />
        <Route component={profile} path="profile" />
        <Route component={login} path="login" />
        <Route path="*" component={NoMatch} />
      </Route>;
    return (
      <Provider store={store}>
            <Router history={hashHistory}>
              {routes}
            </Router>
      </Provider>
    )
  }
}
