import React from "react";
import "./TechTag.css";

const TechTag = ({tags}) => {

    return(
        <div className="tag-container">
            {
                tags.map((tag) => {
                    return (
                    <div className="tag-border">
                        <div className="tag" key={tag}>{tag}</div>
                    </div>
                    );
                })
            }
        </div>
    );
}

export default TechTag;