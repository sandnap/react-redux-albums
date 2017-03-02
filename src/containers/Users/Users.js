import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { UserList } from '../../components';
import { callGetUsers } from '../../redux/modules/users';

class Users extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userList: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    props.dispatch(callGetUsers());
  }
  render() {
    return <UserList userList={this.props.userList} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.users.userList || [],
    userFilter: state.form.userFilter
  };
};

export default connect(mapStateToProps)(Users);
