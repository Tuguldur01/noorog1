import React from 'react';
import { connect } from 'react-redux';
import * as usersAction from '../actions/usersAction.jsx';
import { bindActionCreators } from 'redux';
import Store from '../store.jsx';

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
    this.state = {
      open: false,
      email: '',
      password: '',
    };

  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin(e) {
    this.props.actions.loginUser(this.state.email, this.state.password);
  }
  ComponentWillMount(){
    console.log('count',Store.listenerCount("change"));
  }
  render() {
    var backImg = require("file!../assets/img/city.jpg");
    var devStyle = {
      backgroundImage: 'url(' + backImg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'top center'
    }
    return (
      <div className="signup-page">
        <div className="wrapper">
          <div className="header header-filter" style={devStyle}>
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                  <div className="card card-signup">
                    <form className="form" method action>
                      <div className="header header-primary text-center">
                        <h4>Sign Up</h4>
                        <div className="social-line">
                          <a href="#pablo" className="btn btn-just-icon">
                            <i className="fa fa-facebook-square" />
                          </a>
                          <a href="#pablo" className="btn btn-just-icon">
                            <i className="fa fa-twitter" />
                          </a>
                          <a href="#pablo" className="btn btn-just-icon">
                            <i className="fa fa-google-plus" />
                          </a>
                        </div>
                      </div>
                      <p className="text-divider">Or Be Classical</p>
                      <div className="content">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="material-icons">face</i>
                          </span>
                          <input type="text" className="form-control" placeholder="First Name..." />
                        </div>
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="material-icons">email</i>
                          </span>
                          <input type="text" value={this.state.email} onChange={this.handleEmailChange} className="form-control" placeholder="Email..." />
                        </div>
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="material-icons">lock_outline</i>
                          </span>
                          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password..." className="form-control" />
                        </div>
                      </div>
                      <div className="footer text-center">
                        <a onClick={this.handleLogin} className="btn btn-primary btn-wd btn-lg">Login</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(login);