import React, { Component } from 'react';
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
        <BrowserRouter>
  <div>
      <Link to={'/home'}>Home</Link>
      <Link to={'/contact'}"/"contact>Contact</Contact>
      <Link to='/'projects>Projects</Projects>
      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </div>
  <BrowserRouter />
        </div>
      );
    }


export default App;
