import React, { Component } from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './components/about.js'
import Contact from './components/contact.js'
import Projects from './components/projects.js'
import Resume from './components/resume.js'
import Menu from './components/menu.js'
import bg from './images/topbanner.jpg'

class Page extends Component {
  render () {
    return (
      <App>
      <div className="App">

        <header>
          <Menu/>
        </header>


          <img src={bg} alt=""  width="100%" height="auto"/>

          </div>
          <h1>Kai-Wei 'Konrad' Wang </h1>
        <h2>Software Developer, World Traveller, Boba Addict</h2>
        <h1>Heres a little bit about me, I will be telling you guys everything about my life</h1>
        <Router>
          <Switch>
            <Route exact path='/' component={'index.js'} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects'component={Projects} />
          </Switch>
      </Router>

      </App>
    )
  }
}

render(<Page />, document.getElementById('root'));
registerServiceWorker();
