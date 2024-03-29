import React from 'react';
import "./Hero.css";
import { Link } from 'react-router-dom';


//Wire up email contact

const Hero = () => {
    return (
        <>
        <div id="header">
            <div className="inner-header flex">
                <div>
                    <h1 className='name'>Patrick Dayton</h1>
                    <p className='job'>UX/UI Designer</p>
                    <div className='link-container'>
                        <a className='social-icon' href='mailto:patrick.dayton24@gmail.com'>
                            <img src={require('../../assets/mail-icon.jpeg')} alt='email' className='social mail'/>
                        </a>
                        <a className='social-icon' href='https://www.linkedin.com/in/patrick-dayton-902b7176/'>
                            <img src={require('../../assets/LinkedIn.png')} alt='linkedin' className='social'/>
                        </a>
                        <a className='social-icon' href='https://github.com/pdayton25'>
                            <img src={require('../../assets/GitHub.png')} alt='github' className='social'/>
                        </a>
                    </div>
                    <div className='links'>
                        <Link to='/portfolio'>
                            <a href="#projects" className='link'>To Portfolio</a>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
                </svg>
            </div>
        </div>
        </>
    );
}   

export default Hero;
/*
<section className="hero-container" id="hero">
            <div className='content-container'>
                <div className="content">
                    <img src={require('../assets/headshot.png')} alt='Patrick' className='headshot' />
                    <div className="name-wrapper">
                        <p className="job-title">front-end web developer</p>
                        <p className="name">PATRICK DAYTON</p>
                    </div>
                    <div className="description-container">
                        <div className="personal-description">
                            <p>Hello world, my name is Patrick.</p>
                            <p>I am a front end web developer with a passion for design and hopify applications</p>
                            <p>As a self taught developer I have worked with and am proficient with the following:</p>
                        </div>
                    </div>
                    <div className='tag-group'>
                        <TechTag 
                            tags = {tags}
                        />
                    </div>
                    <div className="description-container">
                        <div className="personal-description">
                            <p>and i'm familiar with the following:</p>
                        </div>
                    </div>
                    <div className='tag-group'>
                        <TechTag 
                            tags = {familiarTags}
                        />
                    </div>
                </div>
            </div>
        </section>
*/