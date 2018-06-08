import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './components/about.js'
import Contact from './components/contact.js'
import Projects from './components/projects.js'
import Resume from './components/projects.js'
import Menu from './components/menu.js'
import bg from './images/topbanner.jpg'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu/>
          <div className="down-arrow">
          <img src={bg} alt="Sroll"  width="50px"/>
          </div>
          <h1>Kai-Wei 'Konrad' Wang </h1>
        <h2>Software Developer, World Traveller, Boba Addict</h2>
        <Router>
          <div>
              <Link to={'/'}>About</Link>
              <Link to={'/contact'}>Contact</Link>
              <Link to={'/projects'}>Projects</Link>
              <Link to = {'/resume'}>Resume</Link>

              <Route exact path='/' component={About} />
              <Route path='/resume' component={Resume} />
              <Route path='/contact' component={Contact} />
              <Route path='/projects'component={Projects} />
          </div>
        </Router>
      </div>
      );
    }
}


export default App;
