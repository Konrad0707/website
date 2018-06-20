import React, {Component} from 'react';
import './major.scss';

export default class about extends Component{
  render(){
    return(
      <div className = 'container'>
        <h1>Kai-Wei 'Konrad' Wang </h1>
        <h2>Software Developer, World Traveller, Boba Addict</h2>
        <h3>Heres a little bit about me</h3>
        <div className='left'>
          <h3 className='title'> Location </h3>
            <h4> Atlanta, GA </h4>
          <h3 className='title'> Social Media </h3>
            <h4> @wafflelord</h4>
            <h4>Linkedin</h4>
          <h3 className='title'> Quote of The Week </h3>
            <h4> "All of the biggest technological inventions created by man – the airplane, the automobile, the computer – says little about his intelligence, but speaks volumes about his laziness." – Mark Kennedy</h4>
          <h3 className='title'> On Repeat </h3>

        </div>
        <div className='right'>
        </div>
      </div>

    )
  }

}
