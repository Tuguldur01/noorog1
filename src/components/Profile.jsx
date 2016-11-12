import React from 'react';

let a = 0

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
    return(
      <div>
        <input type="text" id="userName"/>
        <button id="button" onClick={this.searchUser}>Хэрэглэгч олох</button>
        <span id="output"></span>
      </div>
    )
  }
}
