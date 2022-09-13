import React from "react";
import './Skylight.css';


const Skylight = () => {
    return (
        <section className="skylight-container">
            <div className="left">
                <img src={require(`../../assets/SkylightIpad.png`)} className='skylight-ipad' alt='skylight' />
            </div>
            <div className="right">
                <img src={require(`../../assets/SkylightConciergeLogo.png`)} className="skylight-logo" alt='skylight-logo'/>
                <p className="design-description">A lifestyle first apartment search tool, offering concierge services for those who want a pain free experience.</p>
                <div className="button-wrap">
                    <button className='skylight-button'>Case Study</button>
                    <img src={require(`../../assets/skylightWedge.png`)} className='skylight-wedge' alt='skylight-wedge'/>
                </div>
            </div>
        </section>
    )
}

export default Skylight;