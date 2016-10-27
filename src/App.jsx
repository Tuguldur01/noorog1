import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Nav from './components/Nav.jsx'

injectTapEventPlugin();



export default class App extends React.Component {

  componentDidMount(){

  }

  render() {
    return(
    <MuiThemeProvider>
      <div>
        <Nav/>
        {this.props.children}
      </div>
    </MuiThemeProvider>
    )
  }
}
