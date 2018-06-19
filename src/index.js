import React, { Component } from 'react';
import { render } from 'react-dom'
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import About from './components/about.js'
import Contact from './components/contact.js'
import Projects from './components/projects.js'
import Portfolio from './components/resume.js'
import bg from './images/topbanner.jpg'

class Page extends Component {
  render () {
    return (
      <App>
        <Router>
          <div>
            <header>
              <ul className = "menu">
                <li><Link to="Page#About">About</Link></li>
                <li><Link to="Page#Portfolio">Portfolio</Link></li>
                <li><Link to="Page#Projects">Projects</Link></li>
                <li><Link to="Page#Contact">Contact</Link></li>

              </ul>
            </header>
            <div className = "content">
              <div id="About">
                <About />
              </div>
              <img src={bg} alt=""  width="5%" height="auto"/>
              <div id="Portfolio">
                <Portfolio />
              </div>
              <div id = "Projects">
                <Projects />
              </div>
              <div id="Contact">
                <Contact />
              </div>

            </div>
          </div>
        </Router>
    </App>
    )
  }
}

render(<Page />, document.getElementById('root'));
registerServiceWorker();
