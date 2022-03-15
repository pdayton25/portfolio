import React, { useState } from "react";
import { project } from '../data';
import TechTag from "./TechTag";
import Button from "./Button";
import "./ProjectCards.css";

const ProjectCards = () => {

    const [ isDisplayed, setIsDisplayed ] = useState(false);

    return (
        <section className="project-container">
            <div className="second-project-container">
                <div className="project-header">
                    <p className="proj-sec-header">recent works im most proud of</p>
                    <p className="proj-header"> PROJECTS</p>
                </div>
                {
                    project.map(({name, tags, description, key}) => {
                        return (
                            <div 
                                className={`project-card-${key}`}
                                key={key} 
                                onMouseEnter={() => setIsDisplayed(true)}
                                onMouseLeave={() => setIsDisplayed(false)}
                            >
                                <img src={ require(`../assets/${name}.png`)} alt={`project: ${name}`} />
                            { isDisplayed && (
                                <div className="project-cover">
                                    <div className="name">{name}</div>
                                    <TechTag tags={tags}/>
                                    <div className="description">{description}</div>
                                    <Button 
                                        name = "VIEW PROJECT"    
                                    />
                                </div>
                            )}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default ProjectCards;
