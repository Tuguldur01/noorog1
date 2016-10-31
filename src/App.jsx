import React from 'react';
import { Link, Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Nav from './components/Nav.jsx';
import Home from './components/Root.jsx';
import Content from './components/Content.jsx';
import CSS from './components/Css.jsx';
import profile from './components/Profile.jsx'
injectTapEventPlugin();



export default class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route component={Nav} path="/">
            <IndexRoute component={Home} />
            <Route component={Home} path="home" />
            <Route component={Content} path="content" />
            <Route component={CSS} path="css" />
            <Route component={profile} path="profile" />
          </Route>
        </Router>
      </MuiThemeProvider>
    )
  }
}
