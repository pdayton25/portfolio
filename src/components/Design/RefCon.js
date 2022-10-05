import React from "react";
import './RefCon.css';
import { Link } from 'react-router-dom';

const RefCon = () => {
    return (
        <section className="refcon-container">
            <div className="left-ref">
                <img src={require('../../assets/RefConMobile.png')}  loading='lazy' className='refcon-mobile' alt='refcon' data-aos='fade-up' data-aos-delay="200"/>
            </div>
            <div className="right-ref">
                <img src={require('../../assets/RefConLogo.png')} loading='lazy' className="refcon-logo" alt='refcon' data-aos='fade-left' data-aos-delay="100" data-aos-anchor-placement="bottom-bottom"/>
                <p className="design-description refcon-desc">A referral and contact network for residential contractors and homeowners.</p>
                <div className="button-wrap">
                <Link to="/portfolio">
                <button className='refcon-button'>Case Study</button>
                </Link>
                <img src={require('../../assets/RefconArrow.png')}  loading='lazy' className="refcon-arrow" alt='arrow'></img>
                </div>
            </div>
        </section>
    )
}

export default RefCon;