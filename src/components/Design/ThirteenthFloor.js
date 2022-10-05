import React from "react";
import './ThirteenthFloor.css';
import { Link } from "react-router-dom";

const ThirteenthFloor = () => {
    return (
        <section className="ThirteenthFloor-container">
            <div className="left-13">
                <img src={require('../../assets/13thFloorLogo.png')} className="ThirteenthFloor-logo" alt='13th Floor Logo'  data-aos='fade-right' data-aos-delay="100" data-aos-anchor-placement="bottom-bottom"/>
                <p className="design-description">A complete redesign of 13th Floor Investments collateral, for their upcoming Fund V fundraising round.</p>
                <div className="button-wrap">
                <Link to="/portfolio/thirteenth">
                    <button className="th-button">Case Study</button>
                </Link>
                <img src={require('../../assets/13thWedge.png')} className="floor-wedge" alt='wedge'/>
                </div>
            </div>
            <div className="right-13">
                <img src={require('../../assets/13thFloorImage.png')} className="ThirteenthFloor-image" alt='13th Floor' data-aos='fade-up' data-aos-delay="100"/>
            </div>
        </section>
    )
}

export default ThirteenthFloor;