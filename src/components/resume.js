import React, {Component} from 'react';
import './major.css';
import file from './files/Kai-WeiWangResume.pdf';

export default class resume extends Component{
  render(){
    return(
      <a href={file} download>Click to Download resume</a>
    )
  }

}
