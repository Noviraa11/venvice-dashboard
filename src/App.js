import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import JoinPage from './pages/join';
// Novira H
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/join' component={JoinPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
