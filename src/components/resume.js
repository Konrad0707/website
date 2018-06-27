import React, {Component} from 'react';
import './major.css';
import file from './files/Kai-WeiWangResume.pdf';
import BluedLogo from '../images/bluedLogo.png'

export default class resume extends Component{
  render(){
    return(
      <div className = 'resume'>
        <h1> <strong>Here's what I've done so far</strong></h1>
        <a href={file} download>Click to Download resume</a>
        <div className = "container_exp">
          <ul>
            <li>
              <div className = "content">
                <div className = "imagebox">
                  <img src = {BluedLogo} alt = ""/>
                </div>
                <h2>Blued</h2>
                <h4><strong><span className = "job_title">Software Engineer Intern</span><br></br>
                Beijing, China</strong></h4>
                <p>Front End Engineer</p>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

        </div>
      </div>
    )
  }

}
