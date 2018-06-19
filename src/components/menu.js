import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './about.js'
import Contact from './contact.js'
import Projects from './projects.js'
import Resume from './resume.js'
import './major.scss'
class menu extends Component {
  render() {
    return (
      <div className = "MenuBar">
        <ul className = "menu">
          <li><Link to={'/'}>About</Link></li>
          <li><Link to={'/Contact'}>Contact</Link></li>
          <li><Link to={'/Projects'}>Projects</Link></li>
          <li><Link to = {'/Resume'}>Resume</Link></li>
        </ul>
      </div>
    );
  }
}

export default menu;
