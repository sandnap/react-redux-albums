import React, { Component, PropTypes } from 'react';
import './UserList.css';

class UserList extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.props.getUsers();
  }
  user() {
    return this.props.userList.map((user) => <li key={user.id}>{user.name}</li>);
  }
  render() {
    return (
      <ul className="UserList">
        {this.user()}
      </ul>
    );
  }
}

export default UserList;
