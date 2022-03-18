import React from 'react';
import TechTag from './TechTag';
import "./Hero.css";

const tags = [
    'HTML', 'CSS', 'Javascript', 'React', 'Git', 'Figma'
];


const Hero = () => {
    return (
        <section className="hero-container">
            <div className='content-container'>
                <div className="content">
                    <div className="name-wrapper">
                        <p className="job-title">front-end web developer</p>
                        <p className="name">PATRICK DAYTON</p>
                    </div>
                    <div className="description-container">
                        <div className="personal-description">
                            <p>Hello world, my name is Patrick.</p>
                            <p>I am a front end web developer with a passion for design. Starting in commercial real-estate, I quickly realized web development was the carreer path I wanted to go down.</p>
                            <p>As a self taught developer I have worked with and am proficient with the following:</p>
                        </div>
                    </div>
                    <div className='tag-group'>
                        <TechTag 
                            tags = {tags}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}   

export default Hero;