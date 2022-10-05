import React from "react";
import './ConstructionPage.css';
import { Link } from "react-router-dom";


const ConstructionPage = () => {
  return (
    <div className="full-page">
      <img src={require('../../../assets/construction.png')} alt='construction' className="construction-image"/>
      <p className="construction-description">Working hard to get this one up!</p>
      <Link to='/portfolio'>
        <button className="construction-button">Back to Portfolio</button>
      </Link>
    </div>
  )
};

export default ConstructionPage