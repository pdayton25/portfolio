import React from "react";
import './About.css';

const About = () => {
    return (
      <div id="about">
        <div className="person-container">
          <img src={require('../../assets/headshot.png')} alt='headshot'/>
          <p>Hi, I'm Patrick!</p>
          <div className="education-container">
            <img srr={''} alt='graduation icon' />
            <p>Bachelors in Business Finance, Kent State University</p>
          </div>
        </div>
        <div className="skills">
          <div className='skill-row'>
            <div className="skill-title">
              <p>Languange</p>
            </div>
            <div className="skill">Javascript</div>
          </div>
        </div>
        <div className="skills">
          <div className='skill-row'>
            <div className="skill-title">
              <p>Web</p>
            </div>
            <div className="skill">React</div>
            <div className="skill">Shopify Polaris</div>
            <div className="skill">HTML/CSS</div>
            <div className="skill">Typescript</div>
          </div>
        </div>
        <div className="skills">
          <div className='skill-row'>
            <div className="skill-title">
              <p>Frameworks</p>
            </div>
            <div className="skill">NextJS</div>
            <div className="skill">Node</div>
          </div>
        </div>
      </div>
    )
};

export default About;