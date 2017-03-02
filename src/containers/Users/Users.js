import { connect } from 'react-redux';
import { UserList } from '../../components';
import { callGetUsers } from '../../redux/modules/users';

const mapStateToProps = (state) => {
  return {
    userList: state.users.userList || [],
    userFilter: state.form.userFilter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(callGetUsers());
    }
  };
};

const Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default Users;
