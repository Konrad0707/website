import React, { Component } from 'react';
import { render } from 'react-dom'
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router} from 'react-router-dom';
//import { HashLink as Link } from 'react-router-hash-link';

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
            <div className = "menu">
              <ul>
                <li><a href="Page#About">About</a></li>
                <li><a href="Page#Portfolio">Portfolio</a></li>
                <li><a href="Page#Projects">Projects</a></li>
                <li><a href="Page#Contact">Contact</a></li>
              </ul>
            </div>
            <div className = "content">
              <div id="About" className="screen">
                <About/>
              </div>
              <img src={bg} alt=""  width="5%" height="auto"/>
              <div id="Portfolio" className="screen">
                <Portfolio />
              </div>
              <div id = "Projects" className="screen">
                <Projects />
              </div>
              <div id="Contact" className="screen">
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
