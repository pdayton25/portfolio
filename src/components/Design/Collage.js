import React from "react";
import './Collage.css';

const Collage = () => {
    return (
        <section className="Collage-container">
            <div className="collage-left">
                <img src={require('../../assets/Collage.png')} className="Collage-logo" alt='collage logo'/>
                <p className="design-description">Collage is the one stop shop to view and display your NFTs across networks</p>
                <div className="button-wrap">
                <button className="collage-button">Case Study</button>
                <img src={require('../../assets/CollageWedge.png')} className="collage-wedge" alt='wedge' />
                </div>
            </div>
            <div className="collage-right">
            <img src={require('../../assets/CollageMockup.png')} className="collage-image" alt='wedge' />

            </div>
        </section>
    )
}

export default Collage;