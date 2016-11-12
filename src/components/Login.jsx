import React from 'react';
import { connect } from 'react-redux';
import * as usersAction from '../actions/usersAction.jsx';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(usersAction, dispatch) };
}
export class login extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false,
      email: '',
      password: '',
    };

  }
  handleOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin(e) {
    var logindata = {};
    logindata = { email: this.state.email, password: this.state.password };
    console.log(logindata);
    this.props.actions.loginUser(JSON.stringify(logindata));
  }
  componentWillReceiveProps(newProps) {
    if (newProps.users.loginData) {
      if (newProps.users.loginData.success == false) {
        alert(newProps.users.loginData.message);
        this.handleClose();
      }
      else {
        console.log('amjilttai');
      }
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Login"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleLogin}
        />,
    ];
    return (
      <div>
        <RaisedButton label="Login" onTouchTap={this.handleOpen} />
        <Dialog
          title="Close"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
          <TextField
            hintText="Email" value={this.state.email} type="email" name="email" onChange={this.handleEmailChange}
            /><br />
          <br />
          <TextField
            hintText="Password" value={this.state.password} name="password" onChange={this.handlePasswordChange} type="password"
            /><br />
        </Dialog>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(login);