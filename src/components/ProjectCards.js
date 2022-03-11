import React, { useState } from "react";
import { project } from '../data';
import TechTag from "./TechTag";


const ProjectCards = () => {

    const [ isDisplayed, setIsDisplayed ] = useState(false);

    return (
        <section className="project-container">
            <div className="project-section-title">
                <p>recent works im most proud of</p>
                <h1>PROJECTS</h1>
            </div>
            {
                project.map(({name, tags, description,key}) => {
                    return (
                        <div 
                            className='project-card' 
                            key={key} 
                            onMouseEnter={() => setIsDisplayed(true)}
                            onMouseLeave={() => setIsDisplayed(false)}
                        >
                            <img href='#' alt={`project #${key}`}></img>
                        { isDisplayed && (
                            <div className="project-cover">
                                <div className="name">{name}</div>
                                <TechTag tags={tags}/>
                                <div className="description">{description}</div>

                            </div>
                        )}
                        </div>
                    )
                })
            }
        </section>
    );
}

export default ProjectCards;
