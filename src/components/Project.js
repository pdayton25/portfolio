import React from 'react';
import { project } from '../data';
import TechTag from './TechTag';

const Project = () => {
    return (
        <div className='project-container'>
            <section className='project-hero'>
                <div className='hero-left'>
                    <img src="#" alt="Project: "></img>
                </div>
                <div className='hero-right'>
                    <div>{project[0].name}</div>
                    <TechTag
                        tags={project[0].tags}
                    />
                    <div className='description'>{project[0].description}</div>
                </div>
            </section>
            <section className='middle'>
                <div className='middle-content-container'>
                    <div className='tagline-wrapper'>
                        <div className='small-tagline'>bringing art to life on the web</div>
                        <div className='large-tagline'>EXPERIENCE ART AS IT WOULD BE ON YOUR WALL</div>
                    </div>
                    <img src="#" alt="project iamge"></img>
                </div>
            </section>
            <section className='bottom'>
                <div>EXPERIENCE</div>
                <div className='secondary-description'>{project[0].description}</div>
                <img src="#" alt="tertiary project img"></img>
            </section>
        </div>
    )
};

export default Project;