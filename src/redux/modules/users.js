const GET_USERS = 'GET_USERS';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
  case GET_USERS:
    return Object.assign({}, state, { userList: action.userList });
  default:
    return state;
  }
}

export function getUsers(userList) {
  return {
    type: GET_USERS,
    userList
  };
}

export function callGetUsers() {
  return dispatch => {
    fetch('/users')
      .then(users => users.json())
      .then(userList => dispatch(getUsers(userList)));
  };
}

