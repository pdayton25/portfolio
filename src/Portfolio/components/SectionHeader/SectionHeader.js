import React from "react";
import './SectionHeader.css';

const SectionHeader = ({title, color}) => {
    console.log(color);
    return (
        <div className="section-header-container" style={{ backgroundColor:`${color}`}}>
            <h2 className="section-title">{title}</h2>
        </div>
    )
}

export default SectionHeader;