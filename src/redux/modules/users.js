const GET_USERS = 'GET_USERS';
const GET_USER = 'GET_USER';
export const STORE_USER = 'STORE_USER';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
  case GET_USERS:
    return Object.assign({}, state, { userList: action.userList });
  case GET_USER:
    return Object.assign({}, state, { user: action.user });
  case STORE_USER:
    return Object.assign({}, state, { user: null });
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

export function getUser(user) {
  return {
    type: GET_USER,
    user
  };
}

export function storeUser(user) {
  return {
    type: STORE_USER,
    user
  };
}

export function clearUser(user) {
  return {
    type: STORE_USER,
    user
  };
}

export function callGetUsers() {
  return dispatch => {
    fetch('/users')
      .then(users => users.json())
      .then(userList => dispatch(getUsers(userList)));
  };
}

export function callGetUser(id) {
  return dispatch => {
    fetch(`/users/${id}`)
      .then(user => user.json())
      .then(user => dispatch(getUser(user)));
  };
}

export function callStoreUser(user) {
  const headers = new Headers({'Content-Type': 'application/json'});
  return dispatch => {
    const init = { method: 'PUT', body: JSON.stringify(user), headers: headers };
    fetch(`/users/${user.id}`, init)
      .then(newUser => newUser.json())
      .then(newUser => dispatch(storeUser(newUser)));
  };
}
