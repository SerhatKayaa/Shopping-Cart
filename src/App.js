import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { isAuthenticated } from './repository';

class App extends Component {
  render() {
    const auth = isAuthenticated();
    return (
      <Router>
        <div>
          <Route exact path='/' component ={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
