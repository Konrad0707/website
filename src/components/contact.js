import React, {Component} from 'react';
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import './major.css';

export default class contact extends Component{
  render(){
    return(
      <div className = "contact_container">
        <footer>
          <h1>Whoop!! If im interesting enough for you to scroll through everything,<br></br>Then we should definitely get in touch!</h1>
          <h2><span><a href="http://www.linkedin.com/in/kwang0707">Linkedin </a></span>
           or Email works.</h2>
          <a href="http://www.linkedin.com/in/kwang0707"><img src={linkedin} alt=""/></a>
          <img src={email} alt=""/>
        </footer>
      </div>
    )
  }

}
