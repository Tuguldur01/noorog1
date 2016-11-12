import React from 'react';

<<<<<<< HEAD
let a = 0
=======
>>>>>>> ab1385c6922021ed773baba2a00577e0393c3420

export default class Profile extends React.Component {
  searchUser () {
    a++
    document.getElementById('output').innerHTML = a
  }

  componentWillMount() {
    this.setState({
      articles: this.props.actions.fetchUsers()
    })
  }

  render() {
<<<<<<< HEAD
    return(
      <div>
        <input type="text" id="userName"/>
        <button id="button" onClick={this.searchUser}>Хэрэглэгч олох</button>
        <span id="output"></span>
=======

    return (
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

            </div>
          </div>
        </div>
>>>>>>> ab1385c6922021ed773baba2a00577e0393c3420
      </div>
    );
  }
};