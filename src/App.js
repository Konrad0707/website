import React, { Component } from 'react';
import about from './components/about.js'
import contact from './components/contact.js'
import projects from './components/projects.js'
import resume from './components/projects.js'
import menu from './components/menu.js'
import bg from './images/topbanner.jpg'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <menu/>
          <div className="down-arrow">
          <img src={bg} alt="Sroll"  width="50px"/>
          </div>
          <h1>Kai-Wei 'Konrad' Wang </h1>
        <h2>Software Developer, World Traveller, Boba Addict</h2>
        <h2 className="heading" id="about">ABOUT</h2>
          <about />
        <h2 className="heading" id="contact">CONTACT</h2>
          <contact/>
        <h2 className="heading" id="projects">PROJECTS</h2>
          <projects/>
        <h2 className="heading" id="resume">RESUME</h2>
          <resume />
      </div>
    );
  }
}

export default App;
