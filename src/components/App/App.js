import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import Admin from '../Admin/Admin.jsx';
import Project from '../Project/Project.jsx';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <Route path='/' exact component={Project} />
      <Route path='/admin' exact component={Admin} />
      </div>
      </Router>
    );
  }
}

export default App;
