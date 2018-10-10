import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Homepage from './Homepage';
import CreateHome from './CreateHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/createHome' component={CreateHome} />
            <Route path='/' component={Homepage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
