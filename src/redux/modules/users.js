const GET_USERS = 'GET_USERS';
const GET_USER = 'GET_USER';
export const STORE_USER = 'STORE_USER';

/*
  NOTE: These reduces have been modified because our test API doesn't really store the values in their database
  though the calls are actually made and the response is accurate. For this API I am just manipulating the data
  in memory. You can remove the conditional logic in each reducer to work with a real API.
*/
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
  case GET_USERS:
    // Since our test API doesn't store data we will manipulate it in memory after the inital load
    if (!state.userList) {
      return Object.assign({}, state, { userList: action.userList });
    }
    return state;
  case GET_USER:
    // Pull the user from the userList if it already exists otherwise use the newly loaded user
    // Again because our test API doesn't store values
    let user = action.user;
    if (state.userList) {
      user = state.userList.find(nUser => nUser.id === action.user.id);
    }
    return Object.assign({}, state, { user: user });
  case STORE_USER:
    // Replace the user in the user list if it exists
    // Again because our test API doesn't store values
    if (action.user && state.userList) {
      const newList = [ ...state.userList ];
      newList[newList.findIndex(fUser => fUser.id === action.user.id)] = action.user;
      return Object.assign({}, state, { user: null, userList: newList });
    }
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
