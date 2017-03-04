import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import './UserList.css';

const UserList = function (props) {
  const address = (addr) => {
    return (
      <div className="address">
        <div>{addr.street}</div>
        <div>{addr.suite}</div>
        <div>{addr.city} {addr.zipcode}</div>
      </div>
    );
  };
  const users = () => {
    return props.userList.map((user) => {
      return (
        <TableRow key={user.id} selectable={false}>
          <TableRowColumn><Link to={`/users/${user.id}`}>{user.name}</Link></TableRowColumn>
          <TableRowColumn>{user.email}</TableRowColumn>
          <TableRowColumn>{address(user.address)}</TableRowColumn>
        </TableRow>
      );
    });
  };
  return (
    <div className="UserList">
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {users()}
        </TableBody>
      </Table>
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired
};

export default UserList;
