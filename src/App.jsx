import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link, Router, Route, IndexRoute, hashHistory } from 'react-router';
import Nav from './components/Nav.jsx';
import Home from './components/Root.jsx';
import Content from './components/Content.jsx';
import CSS from './components/Css.jsx';
import profile from './components/Profile.jsx';
import ContentInfo from './components/ContentInfo.jsx';
import NoMatch from './components/NoMatch.jsx';
import login from './components/Login.jsx';
import { Provider } from 'react-redux';
import Footer from './components/Footer.jsx';
import Logout from './components/Logout.jsx';
import auth from './components/Auth.jsx';
import Comment from './components/Comment';
import store from './store.jsx';
function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
export default class App extends React.Component {

  render() {
    const routes =
      <Route component={Nav} path="/">
        <IndexRoute component={Content} />
        <Route component={Home} path="home" />
        <Route component={Comment} path="comment" />
        <Route component={Content} path="content" />
        <Route component={ContentInfo} path="content/:articleId" />
        <Route component={CSS} path="css" />
        <Route component={profile} path="profile" onEnter={requireAuth} />
        <Route component={login} path="login" />
        <Route component={Logout} path="logout" />
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
