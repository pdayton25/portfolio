import React from 'react';
import { projects } from '../../data';
import Project from './Project/Project';

import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className='projects-container'>
            <h1 className='section-title'>Projects</h1>
            <div className='projects'>
                {projects.map(({name, description,tech, img, link}, index) => {
                    return <Project 
                                key={index}
                                name={name} 
                                description={description} 
                                tech={tech} 
                                img={img} 
                                link={link} 
                            />
                })}
            </div>
        </section>
    )
};

export default Projects;