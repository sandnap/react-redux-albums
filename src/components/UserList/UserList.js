import React, { PropTypes } from 'react';
import './UserList.css';

const UserList = function (props) {
  const user = () => {
    return props.userList.map((usr) => {
      return <li key={usr.id}>{usr.name}</li>;
    });
  };
  return (
    <ul className="UserList">
      {user()}
    </ul>
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired
};

export default UserList;
