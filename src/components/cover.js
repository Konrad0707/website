import React, {Component} from 'react';
import './major.css';

import Down from '../images/down.png'

export default class projects extends Component{
  render(){
    return(
      <div className='cover_content'>
        <div className = "Title">
          <h1><mark>Kai-Wei 'Konrad' Wang </mark></h1>
          <h2><mark>Software Developer<br/>World Traveller<br/> Boba Addict</mark></h2>
        </div>
        <div className = "DownMarker">
          <img src={Down} alt="" width="50px" height="auto"/>
        </div>
      </div>
    )
  }

}
