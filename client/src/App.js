import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
    <Fragment>
      <Navbar />
      <div ClassName="container">
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/about' component={About} />  
          
         
        </Switch>
      </div>
      </Fragment>
    </Router>
  );
}

export default App;
