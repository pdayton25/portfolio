import React from "react";

const TechTag = ({tags}) => {
    console.log(tags);

    return(
        <div className="tag-container">
            {
                tags.map((tag) => {
                    return (
                    <div className="tag-border">
                        <div className="tag">{tag}</div>
                    </div>
                    );
                })
            }
        </div>
    );
}

export default TechTag;