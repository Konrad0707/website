import React, {Component} from 'react';
import './major.css';
import file from './files/Kai-WeiWangResume.pdf';
import BluedLogo from '../images/bluedLogo.png';
import homedepot from '../images/homedepot.png';
import ael from '../images/ael.png';
import gtri from '../images/gtri.png';

export default class resume extends Component{
  render(){
    return(
      <div className = 'resume_container'>
        <h1> <strong>Here's what I've done so far</strong></h1>
        <a href={file} download>Click to Download resume</a>
        <div className = "container_exp">
            <div className = "content">
              <div className = "imagebox">
                <img src = {BluedLogo} alt = ""/>
                <div className = "overlay">
                  <a href="https://www.blued.com/intl/">Learn more about Blued</a>
                </div>
              </div>
              <div className = "detail">
                <h2>Blued</h2>
                <h4><strong><span className = "job_title">Frontend engineer Intern || <span> May 2018 ~ Aug 2018  </span></span><br></br>
                Beijing, China</strong></h4>
                <p>Front End Engineer</p>
              </div>
            </div>

            <div className = "content">
              <div className = "imagebox">
                <img src = {homedepot} alt = ""/>
                <div className = "overlay">
                  <a href="http://ir.homedepot.com/news-releases/2018/04-18-2018-130228118">Learn more about HomeDepot</a>
                </div>
              </div>
              <div className = "detail">
                <h2>The HomeDepot</h2>
                <h4><strong><span className = "job_title">Software Engineer Intern || <span> Nov 2017 ~ present </span></span><br></br>
                Atlanta, GA</strong></h4>
                <p>Works in the Deep learning and Artificial exploratory team, focusing on image processing
                Uses software design, analysis and programming skills to create innovative automated test
                systems</p>
              </div>
            </div>

            <div className = "content">
              <div className = "imagebox">
                <img src = {ael} alt = ""/>
                <div className = "overlay">
                  <a href="https://itunes.apple.com/us/app/invisible-cities/id1369569108?mt=8">Checkout our APP!</a>
                </div>
              </div>
              <div className = "detail">
                <h2>GT Augmented Environments Lab</h2>
                <h4><strong><span className = "job_title">UI/UX Developer || <span> Aug 2017 ~ present </span></span><br></br>
                Atlanta, GA</strong></h4>
                <p>Develop community AR tableaux for Vertically Integrated Projects (VIP)Produce AR experience in which
                multiple users can place AR entities in physical space in real-time which are programmed through JavaScript, C#
                and Unity. The system will be flexible, capable of multiple use-cases and different iterations from interior
                design to cultural heritage.</p>
              </div>
            </div>

            <div className = "content">
              <div className = "imagebox">
                <img src = {gtri} alt = ""/>
                <div className = "overlay">
                  <a href="http://stip.gatech.edu/using-the-orcid-id/">Learn more about my Research</a>
                </div>
              </div>
              <div className = "detail">
                <h2>Georgia Tech Research Institute</h2>
                <h4><strong><span className = "job_title">Undergraduate Research Assistant || <span> Oct 2016 ~ Aug 2017</span></span><br></br>
                Atlanta, GA</strong></h4>
                <p>Uses longitudinal, cross-sectional, and comparative research designs to generate empirical analyses of large samples
                of research literature in ‘STEM-ED’ and ‘Cog-Sci’ research communities. Analyzed the connections between STEM educational
                research communities and knowledge transfer through big data analysis.</p>
              </div>
            </div>

        </div>
      </div>
    )
  }

}
