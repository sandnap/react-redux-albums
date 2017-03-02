import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Home } from './containers';
import createStore from './redux/createStore';

import './index.css';

injectTapEventPlugin();

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    </Provider>
  </BrowserRouter>,
 document.getElementById('root')
);
