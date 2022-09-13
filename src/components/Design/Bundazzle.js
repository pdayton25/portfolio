import React from "react";
import './Bundazzle.css';

const Bundazzle = () => {
    return (
        <section className="bundazzle-container">
            <div className="left-bund">
                <img src={require('../../assets/pointing.png')} className="pointer" alt='logo' />
            </div>
            <div className="right-bund">
                <img src={require('../../assets/BundazzleLogo.png')} className="bundazzle-logo" alt='logo' />
                <img src={require('../../assets/Stars.png')} className="stars" alt='reviews'/>
                <div className="line"></div>
                <p className="design-description">Bundazzle is a bundling application for shopify stores, gamifying the bundling experience increasing AOV for stores.</p>
                <div className="line"></div>
                <img src={require('../../assets/BundazzleWidget.png')} className="bundazzle-app" alt='app'/>
                <button className="casestudy-button">Checkout Project</button>
            </div>
        </section>
    )
}

export default Bundazzle;