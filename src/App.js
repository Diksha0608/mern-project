import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact> <Users /></Route>
        <Route path="/places/NewPlaces" exact> <NewPlaces /></Route>
        <Redirect />
      </Switch>
    </Router>
  )

};

export default App;