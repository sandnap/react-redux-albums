import { connect } from 'react-redux';
import { UserList } from '../../components';

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
    userFilter: state.form.userFilter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilter: (form) => dispatch()
  };
};

const Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default Users;
