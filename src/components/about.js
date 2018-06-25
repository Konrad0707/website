import React, {Component} from 'react';
import Spotify from 'react-spotify-player';

import insta from '../images/instagram.png';
import linked from '../images/linkedin.png';
import './major.css';

const size = {
  width: '90%',
  height: 80,
};

export default class about extends Component{

  render(){
    return(
      <div className = 'container'>
        <center>
          <h1>Kai-Wei 'Konrad' Wang </h1>
          <h2 className="assc">Software Developer &emsp; | &emsp; World Traveller &emsp;| &emsp; Boba Addict</h2>
        </center>
        <div className= 'layout'>
          <div className='left'>
            <h3 className='title'> Location </h3>
              <p> Atlanta, GA </p>
            <h3 className='title'> Social Media </h3>
            <div className = 'social'>
              <img src={insta} alt=""  width="7%" height="auto"/>
              <a href='www.instagram.com/wafflelord'> @wafflelord</a>
              <br></br>
              <br></br>
              <img src={linked} alt=""  width="7%" height="auto"/>
              <a href='www.linkedin.com/kwang0707'> Konrad Wang</a>
            </div>

            <h3 className='title'> Quote of The Week </h3>
              <p> "All of the biggest technological inventions created by man " – Mark Kennedy</p>
            <h3 className='title'> On Repeat </h3>
            <Spotify
              uri="spotify:track:6T8cJz5lAqGer9GUHGyelE"
              view={'list'}
              theme={'black'}
              size={size}
            />
          </div>
          <div className='right'>
            <h1>Hi there!</h1>
            <p>My Name is Kai-Wei Wang, but my friends call me Konrad.
            I'm a 3rd year at Georgia Tech majoring in Computer Science, I love everything about this field
            from intense sleep deprived hackathons to developing semester long projects,
            I've learned and experienced so much throughout my time at Georgia Tech. </p>
          </div>
        </div>
      </div>

    )
  }

}
