import React from "react";
import './About.css';

const About = () => {
    return (
      <div id="about">
        <div className="person-container">
          <img src={require('../../assets/headshot.png')} alt='headshot' className="headshot"/>
          <p className="hi">Hi, I'm Patrick!</p>
          <div className="work-education-container">
            <div className="education-container">
              <img src={require('../../assets/Suitcase.png')} alt='suitcase icon' className="mortarboard"/>
              <p className="education">Software Engineer &amp; UI/UX Designer</p>
            </div>
            <div className="education-container">
              <img src={require('../../assets/Mortarboard.png')} alt='graduation icon' className="mortarboard"/>
              <p className="education">Bachelors in Business Finance, Kent State University</p>
            </div>
          </div>
        </div>
        <div className="skills-wrapper">
          <div className="skills">
            <div className='skill-row'>
              <div className="skill-title">
                <p>Languange</p>
              </div>
              <div className="skill">Javascript</div>
              <div className="skill">Typescript</div>
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
          <div className="skills">
            <div className='skill-row'>
              <div className="skill-title">
                <p>Design Tools</p>
              </div>
              <div className="skill">Figma</div>
              <div className="skill">Adobe Creative Suite</div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default About;