import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Cards from './components/Cards';
import Mountains from './components/pages/Mountains';
import Oceans from './components/pages/Oceans';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mountains' component={Mountains} />
          <Route path='/oceans' component={Oceans} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/cards' component={Cards} />
          <Route path='/gallery' component={Gallery}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;