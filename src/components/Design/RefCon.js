import React from "react";
import './RefCon.css';

const RefCon = () => {
    return (
        <section className="refcon-container">
            <div className="left-ref">
                <img src={require('../../assets/RefConMobile.png')}  className='refcon-mobile' alt='refcon'/>
            </div>
            <div className="right-ref">
                <img src={require('../../assets/RefConLogo.png')} className="refcon-logo" alt='refcon'/>
                <p className="design-description refcon-desc">A referral and contact network for residential contractors and homeowners.</p>
                <div className="button-wrap">
                <button className='refcon-button'>Case Study</button>
                <img src={require('../../assets/RefconArrow.png')}  className="refcon-arrow" alt='arrow'></img>
                </div>
            </div>
        </section>
    )
}

export default RefCon;