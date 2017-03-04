import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import users, { STORE_USER } from '../redux/modules/users';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    userForm: (state, action) => {
      switch (action.type) {
      case STORE_USER:
        return null;
      default:
        return state;
      }
    }
  }),
  users: users
});

export default (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
};
