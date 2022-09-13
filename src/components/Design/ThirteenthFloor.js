import React from "react";
import './ThirteenthFloor.css';

const ThirteenthFloor = () => {
    return (
        <section className="ThirteenthFloor-container">
            <div className="left-13">
                <img src={require('../../assets/13thFloorLogo.png')} className="ThirteenthFloor-logo" alt='13th Floor Logo' />
                <p className="design-description">A complete redesign of 13th Floor Investments collateral, for their upcoming Fund V fundraising round.</p>
                <div className="button-wrap">
                <button className="th-button">Case Study</button>
                <img src={require('../../assets/13thWedge.png')} className="floor-wedge" alt='wedge'/>
                </div>
            </div>
            <div className="right-13">
                <img src={require('../../assets/13thFloorImage.png')} className="ThirteenthFloor-image" alt='13th Floor'/>
            </div>
        </section>
    )
}

export default ThirteenthFloor;