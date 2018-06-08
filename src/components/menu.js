import React, { Component } from 'react';
import './menu.scss'

class menu extends Component {
  render() {
    return (
      <div className = "menuBar">
        <ul className="menu">
          <li className="nav-item nav-name">SUH</li>
          <li className="nav-item nav-last"><a href="#contact" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="#resume" className="nav-link">Resume</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
        </ul>
      </div>
    );
  }
}

export default menu;
