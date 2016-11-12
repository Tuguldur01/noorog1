import React from 'react';
<<<<<<< HEAD
import { Link, Router, Route,browserHistory, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
=======
import { Link, Router, Route, IndexRoute, hashHistory } from 'react-router';
>>>>>>> ab1385c6922021ed773baba2a00577e0393c3420
import Nav from './components/Nav.jsx';
import Home from './components/Root.jsx';
import Content from './components/Content.jsx';
import CSS from './components/Css.jsx';
import profile from './components/Profile.jsx';
import ContentInfo from './components/ContentInfo.jsx';
import NoMatch from './components/NoMatch.jsx';
<<<<<<< HEAD
import login from './components/Login.jsx';
import {Provider} from 'react-redux';
=======
import Footer from './components/Footer.jsx';
import login from './components/login.jsx';
import { Provider } from 'react-redux';
>>>>>>> ab1385c6922021ed773baba2a00577e0393c3420
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
