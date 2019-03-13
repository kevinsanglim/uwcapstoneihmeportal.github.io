import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import Views
import LogInView from './views/LogInView'
//import HomeView from './views/HomeView'
import ProfileView from './views/ProfileView'
//import { Provider } from 'react-redux'

// Style related imports
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route path='/loginView' component={LogInView} />
              <Route path='/profileView' component={ProfileView} />
              <Redirect to="/profileView" />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App
