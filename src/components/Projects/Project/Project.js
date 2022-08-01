import React from "react";
import './Project.css';

const Project = ({name, description, tech, img, link}, index) => {

    return (
        <div className="project-container" key={index}>
            <div className="img-container">
                <img className="project-img" src={require(`../../../assets/${img}`)} alt="project"/>
            </div>
            <div className="project-content-container">
                <h2 className="project-name">{name}</h2>
                <ul className="techs">
                    {tech.map((data, index) => {
                        return <li key={index} className='tech'>{data}</li>
                    })

                    }
                </ul>
                <p className="description">{description}</p>
                <a href={link.url} className={`site-link ${link.display}`} rel='noreferrer' target={"_blank"}>{link.navigate}</a>
            </div>
        </div>
    )
}

export default Project;