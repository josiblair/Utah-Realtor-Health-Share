import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Solution from './components/Solution/Solution';
import Enroll from './components/Enroll/Enroll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route component={ Home } exact path='/' />
            <Route component={ Solution } path='/solution' />
            <Route component={ Enroll } path='/enroll' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
