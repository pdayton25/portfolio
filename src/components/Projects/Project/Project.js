import React from "react";
import './Project.css';

const Project = ({name, description, tech, img, link}) => {

    return (
        <div className="project-container">
            <img className="project-img" src={require(`../../../assets/${img}`)} alt="project"/>
            <div className="project-content-container">
                <h2 className="project-name">{name}</h2>
                <p className="techs">{tech}</p>
                <p className="description">{description}</p>
                <a href={link.url} className={`site-link ${link.display}`} rel='noreferrer' target={"_blank"}>{link.navigate}</a>
            </div>
        </div>
    )
}

export default Project;