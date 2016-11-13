import React from 'react';


export default class Profile extends React.Component {



  render() {
    var backImg = require("file!../assets/img/city.jpg");
    var devStyle = {
      backgroundImage: 'url(' + backImg + ')'
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
                      <h6>Designer</h6>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
};