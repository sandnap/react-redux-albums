import React, { PropTypes } from 'react';
import './UserList.css';

const UserList = function (props) {
  const users = () => {
    return props.userList.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };
  return (
    <ul className="UserList">
      {users()}
    </ul>
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired
};

export default UserList;
