import React from "react";
import './Collage.css';
import { Link } from "react-router-dom";


const Collage = () => {
    return (
        <section className="Collage-container">
            <div className="collage-left">
                <img src={require('../../assets/Collage.png')} loading='lazy' className="Collage-logo" alt='collage logo' data-aos='fade-right' data-aos-delay="100" data-aos-anchor-placement="bottom-bottom"/>
                <p className="design-description">Collage is the one stop shop to view and display your NFTs across networks</p>
                <div className="button-wrap">
                <Link to="/portfolio/construction">
                    <button className="collage-button">Case Study</button>
                </Link>
                <img src={require('../../assets/CollageWedge.png')}  loading='lazy' className="collage-wedge" alt='wedge' />
                </div>
            </div>
            <div className="collage-right">
            <img src={require('../../assets/CollageMockup.png')} loading='lazy' className="collage-image" alt='wedge' data-aos='fade-up' data-aos-delay="100"/>

            </div>
        </section>
    )
}

export default Collage;