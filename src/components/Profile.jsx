import React from 'react';
import { connect } from 'react-redux';
import * as usersAction from '../actions/usersAction.jsx';
import { bindActionCreators } from 'redux';
import Store from '../store.jsx';
import auth from './Auth.jsx';


function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(usersAction, dispatch) };
}

export class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState = {
      user: this.props.actions.getUser(auth.getToken())
    };
  }

  render() {

    var backImg = require("file!../assets/img/city.jpg");
    var devStyle = {
      backgroundImage: 'url(' + backImg + ')'
    }
    if(this.props.user.user){
      var email = (
        <div>
          {this.props.user.user}
        </div>
      )
    }
    return (
      <div className="profile-page">
        <div className="wrapper">
          <div className="header header-filter" style={devStyle} />
          <div className="main main-raised">
            <div className="profile-content">
              <div className="container">
                <div className="row">
                  <div className="profile">
                    <div className="avatar">
                      <img src={require('file!../assets/img/christian.jpg')} alt="Circle Image" className="img-circle img-responsive img-raised" />
                    </div>
                    <div className="name">
                      <h3 className="title">Christian Louboutin</h3>
                      <h6>
                        {email}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="description text-center">
                  <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <div className="profile-tabs">
                      <div className="nav-align-center">
                        <ul className="nav nav-pills" role="tablist">
                          <li className="active">
                            <a href="#studio" role="tab" data-toggle="tab">
                              <i className="material-icons">camera</i>
                              Studio
                          </a>
                          </li>
                          <li>
                            <a href="#work" role="tab" data-toggle="tab">
                              <i className="material-icons">palette</i>
                              Work
                          </a>
                          </li>
                          <li>
                            <a href="#shows" role="tab" data-toggle="tab">
                              <i className="material-icons">favorite</i>
                              Favorite
                          </a>
                          </li>
                        </ul>
                        <div className="tab-content gallery">
                          <div className="tab-pane active" id="studio">
                            <div className="row">
                              <div className="col-md-6">
                                <img src={require('file!../assets/img/examples/chris1.jpg')} className="img-rounded" />
                                <img src={require('file!../assets/img/examples/chris0.jpg')} className="img-rounded" />
                              </div>
                              <div className="col-md-6">
                                <img src={require('file!../assets/img/examples/chris5.jpg')} className="img-rounded" />
                                <img src={require('file!../assets/img/examples/chris4.jpg')} className="img-rounded" />
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane text-center" id="work">
                            <div className="row">
                              <div className="col-md-6">
                                <img src={require('file!../assets/img/examples/chris5.jpg')} className="img-rounded" />
                                <img src={require('file!../assets/img/examples/chris7.jpg')} className="img-rounded" />
                                <img src={require('file!../assets/img/examples/chris8.jpg')} className="img-rounded" />
                              </div>
                              <div className="col-md-6">
                                <img src={require('file!../assets/img/examples/chris9.jpg')} className="img-rounded" />
                                <img src={require('file!../assets/img/examples/chris5.jpg')} className="img-rounded" />
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane text-center" id="shows">
                            <div className="row">
                              <div className="col-md-6">
                                <img src={require('file!../assets/img/examples/chris7.jpg')} className="img-rounded" />
                                <img src={require('file!../assets/img/examples/chris8.jpg')} className="img-rounded" />
                              </div>
                              <div className="col-md-6">
                                <img src={require('file!../assets/img/examples/chris4.jpg')} className="img-rounded" />
                                <img src={require('file!../assets/img/examples/chris5.jpg')} className="img-rounded" />
                                <img src={require('file!../assets/img/examples/chris9.jpg')} className="img-rounded" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Profile Tabs */}
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div >
      </div >
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
