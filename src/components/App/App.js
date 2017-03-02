import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Users } from '../../containers';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-links">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
        </div>
        <div className="App-content">
          <Route exact path="/" />
          <Route exact path="/users" component={Users} />
        </div>
      </div>
    );
  }
}

export default App;
