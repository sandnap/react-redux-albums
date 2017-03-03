import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import './UserList.css';

const UserList = function (props) {
  const cellClicked = (data) => {
    console.log(props.userList[data].id);
  };
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
        <TableRow key={user.id} selectable={true}>
          <TableRowColumn>{user.id}</TableRowColumn>
          <TableRowColumn>{user.name}</TableRowColumn>
          <TableRowColumn>{user.email}</TableRowColumn>
          <TableRowColumn>{address(user.address)}</TableRowColumn>
        </TableRow>
      );
    });
  };
  return (
    <div className="UserList">
      <Table onCellClick={cellClicked}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
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
