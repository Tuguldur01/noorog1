import React from 'react';
import {Link} from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {AppBar, Tabs, Tab} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


const styles = {
  title: {
    cursor: 'pointer',
  },
};

const myTabs = (
  <Tabs>
    <Tab label="Content" />
    <Tab label="item 2" />
    <Tab label="item 2" />
  </Tabs>
);

export default class Nav extends React.Component {
  constructor() {
  super();

  this.handleTouchTap = this.handleTouchTap.bind(this);
  }
  handleTouchTap() {
    window.location="/"
  }
  render() {
    return(
      <AppBar
        title={<span style={styles.title}>Negative Space Logo</span>}
        onTitleTouchTap={this.handleTouchTap}
        iconElementRight={

          <ToolbarGroup>

            <FlatButton label={<Link to='/profile'>Profile</Link>}/>
            <FlatButton label={<Link to='/css'>css</Link>}/>
            <FlatButton label={<Link to='/content'>Content</Link>}/>
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu>
          </ToolbarGroup>
          }
      >
    </AppBar>
    )
  }
}
