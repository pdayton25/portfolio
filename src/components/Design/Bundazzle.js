import React from "react";
import './Bundazzle.css';
import { Link } from "react-router-dom";

const Bundazzle = () => {
    return (
        <section className="bundazzle-container">
            <div className="left-bund">
                <img src={require('../../assets/pointing.png')} loading='lazy' className="pointer" alt='logo' />
            </div>
            <div className="right-bund" data-aos='fade-up' data-aos-delay="100">
                <img src={require('../../assets/BundazzleLogo.png')}  loading='lazy' className="bundazzle-logo" alt='logo' />
                <img src={require('../../assets/Stars.png')} loading='lazy' className="stars" alt='reviews'/>
                <div className="line"></div>
                <p className="design-description">Bundazzle is a bundling application for shopify stores, gamifying the bundling experience increasing AOV for stores.</p>
                <div className="line"></div>
                <img src={require('../../assets/BundazzleWidget.png')} loading='lazy' className="bundazzle-app" alt='app'/>
                <Link to="/portfolio/bundazzle">
                    <button className="casestudy-button">Checkout Project</button>
                </Link>
            </div>
        </section>
    )
}

export default Bundazzle;