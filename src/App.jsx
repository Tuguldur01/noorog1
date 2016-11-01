import React from 'react';
import { Link, Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Nav from './components/Nav.jsx';
import Home from './components/Root.jsx';
import Content from './components/Content.jsx';
import CSS from './components/Css.jsx';
import profile from './components/Profile.jsx';
import ContentInfo from './components/ContentInfo.jsx';
import NoMatch from './components/NoMatch.jsx';
import login from './components/login.jsx';
import {Provider} from 'react-redux';
import store from './store.jsx';
injectTapEventPlugin();

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
      <MuiThemeProvider>
          <div>
            <Router history={hashHistory}>
              {routes}
            </Router>
          </div>
      </MuiThemeProvider>
      </Provider>
    )
  }
}
