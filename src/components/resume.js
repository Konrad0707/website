import React, {Component} from 'react';
import './major.css';

export default class resume extends Component{
  render(){
    return(
      <form method="get" action="../files/Kai-WeiWangResume.pdf">
        <button type="submit">Download!</button>
      </form>
    )
  }

}
