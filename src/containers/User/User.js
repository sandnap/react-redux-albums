import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { UserForm } from '../../components';
import { callGetUser, callStoreUser, clearUser } from '../../redux/modules/users';

class User extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    props.dispatch(callGetUser(props.match.params.id));
  }
  doSubmit(userForm) {
    this.props.dispatch(callStoreUser(userForm));
    this.props.push('/users');
  }
  componentWillUnmount() {
    this.props.dispatch(clearUser());
  }
  render() {
    return <UserForm doSubmit={this.doSubmit.bind(this)} />;
  }
}

export default connect()(User);
