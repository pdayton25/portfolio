import React, { useState } from "react";
import { project } from '../data';
import TechTag from "./TechTag";
import Button from "./Button";
import "./ProjectCards.css";

const ProjectCards = () => {

    const [ isDisplayed, setIsDisplayed ] = useState(true);

    return (
        <section className="project-container">
            <div className="second-project-container">
                <div className="project-header">
                    <p className="proj-sec-header">recent works im most proud of</p>
                    <p className="proj-header"> PROJECTS</p>
                </div>
                <div className="proj-card-container">
                    {
                        project.map(({name, tags, description, key}) => {
                            return (
                                <div 
                                    className="project-card"
                                    key={key} 
                                    onMouseEnter={() => setIsDisplayed(true)}
                                    onMouseLeave={() => setIsDisplayed(false)}
                                >
                                    <img src={ require(`../assets/${name}.png`)} alt={`project: ${name}`} className="image"/>
                                { isDisplayed && (
                                    <div className="overlay">
                                        <div className="name">{name}</div>
                                        <div className="tag-wrapper">
                                            <TechTag tags={tags} card="card"/>
                                        </div>
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
            </div>
        </section>
    );
}

export default ProjectCards;
