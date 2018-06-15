import React, { Component } from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/about.js'
import Contact from './components/contact.js'
import Projects from './components/projects.js'
import Resume from './components/projects.js'
import Menu from './components/menu.js'
import bg from './images/topbanner.jpg'

class Page extends Component {
  render () {
    return (
      <App>
      <div className="App">
          <Menu/>
          <div className="down-arrow">
          <img src={bg} alt=""  width="50px"/>
          
          </div>
          <h1>Kai-Wei 'Konrad' Wang </h1>
        <h2>Software Developer, World Traveller, Boba Addict</h2>
        <h1>Heres a little bit about me, I will be telling you guys everything about my life</h1>
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
      </App>
    )
  }
}

render(<Page />, document.getElementById('root'));
registerServiceWorker();
