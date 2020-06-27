import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Navbar from './components/layout/Navbar';
import ContactState from './context/contact/ContactState'

const App = () => {
  return (
    <ContextState>
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
    </ContextState>
  );
}

export default App;
