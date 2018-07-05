import React, {Component} from 'react';
import busybee from '../images/busybee.png'
import homeless from '../images/2340.png'
import './major.css';

export default class projects extends Component{
  render(){
    return(
      <div className = 'project_content'>
        <h1>My Latest projects</h1>
        <div className = 'box'>
          <img src={busybee} alt=""/>
        </div>
        <div className = 'box'>
          <img src={homeless} alt=""/>
        </div>
        <div className = 'box'>
          <img src={busybee} alt=""/>
        </div>
      </div>
    )
  }

}
