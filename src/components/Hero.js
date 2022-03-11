import React from 'react';
import TechTag from './TechTag';

const tags = [
    'HTML', 'CSS', 'Javascript', 'React', 'Git', 'Figma'
];


const Hero = () => {
    return (
        <section className="hero-container">
            <div className="header-container">
                <h3 className="job-title">front end web developer</h3>
                <h1 className="name">PATRICK DAYTON</h1>
            </div>
            <div classname="description-container">
                <div className="description">Hello world, my name is Patrick. I am a front end web developer with a passion for design. Starting in commercial real-estate, I quickly realized web development was the carreer path I wanted to go down As a self taught developer I have worked with and am proficient with the following </div>
            </div>
            <TechTag 
                tags = {tags}
            />
        </section>
    );
}   

export default Hero;