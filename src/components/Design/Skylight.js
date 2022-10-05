import React from "react";
import './Skylight.css';
import { Link } from 'react-router-dom'


const Skylight = () => {
    return (
        <section className="skylight-container">
            <div className="left">
                <img src={require(`../../assets/SkylightIpad.png`)} className='skylight-ipad' alt='skylight' data-aos='fade-up' data-aos-delay="100"/>
            </div>
            <div className="right">
                <img src={require(`../../assets/SkylightConciergeLogo.png`)} className="skylight-logo" alt='skylight-logo' data-aos='fade-left' data-aos-delay="100" data-aos-anchor-placement="bottom-bottom"/>
                <p className="design-description">A lifestyle first apartment search tool, offering concierge services for those who want a pain free experience.</p>
                <div className="button-wrap">
                    <Link to="/portfolio/skylight">
                        <button className='skylight-button'>Case Study</button>
                    </Link>
                    <img src={require(`../../assets/skylightWedge.png`)} className='skylight-wedge' alt='skylight-wedge'/>
                </div>
            </div>
        </section>
    )
}

export default Skylight;