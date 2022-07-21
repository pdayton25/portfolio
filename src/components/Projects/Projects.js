import React from 'react';
import { projects } from '../../data';
import Project from './Project/Project';

import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className='project-container'>
            <h1 className='section-title'>Projects</h1>
            <div className='projects'>
                {projects.map(({name, description,tech, img, link}) => {
                    return <Project 
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