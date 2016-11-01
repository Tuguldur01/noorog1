import React from 'react';
import { connect } from 'react-redux';
import * as usersAction from '../actions/usersAction.jsx';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(usersAction, dispatch) };
}

export class login extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState ({
      users:this.props.actions.fetchUsers()
    })
  }
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(login);