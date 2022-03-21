import React from "react";
import { project } from '../data';
import TechTag from "./TechTag";
import Button from "./Button";
import "./ProjectCards.css";

const ProjectCards = () => {

    return (
        <section className="project-container" id="projects">
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
                                    className={`project-card-${key}`}
                                    key={key} 
                                >
                                    <img src={ require(`../assets/${name}.png`)} alt={`project: ${name}`} className="image"/>
                                    <div className={`overlay color-${key}`}>
                                        <div className="name">{name}</div>
                                        <div className="tag-wrapper">
                                            <TechTag tags={tags}/>
                                        </div>
                                        <div className="description">{description}</div>
                                        <Button 
                                            name = "VIEW PROJECT"    
                                        />
                                    </div>
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
