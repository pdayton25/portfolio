import React, {useState} from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

//Styles
import './PortfolioPage.css';

//pdf
import pdf from '../../assets/Patrick_Dayton-UXUI_Designer.pdf';


const PortfolioPage = () => {

    const [show, setShow] = useState(false)

    if(show) {
        document.body.style.position = 'fixed'
    }
    if(!show) {
        document.body.style.position = ''
    }

    return (
        <>
            <header className="portfolio-header">
                <h1 className="portfolio-logo">PATRICK DAYTON</h1>
                <ul className='portfolio-links'>
                    <li className="resume-link">
                        <a href={pdf} target="_blank" rel="noreferrer" className="contact-link">
                            Resume
                        </a>
                        <img src={require('../../assets/PDFIcon.png')} alt="pdf icon" className="pdf-icon" />
                    </li>
                    <li>
                        <a href='mailto:patrick.dayton24@gmail.com' className="contact-link">
                        Contact
                        </a>
                    </li>
                </ul>
            </header>
            <body>
                <div className="section-header-design">
                    <div className="header-wrapper">
                        <p className="section-subtitle">A DEEPER DIVE INTO PREVIOUS WORKS</p>
                        <h2 className="section-header-title">CASE STUDIES</h2>
                    </div>
                </div>
                <div className="project-body">
                    <Link to='/portfolio/MiBuild'>
                        <div className="MiBuild-card project">
                            <img src={require('../../assets/MiBuildConfiguration.png')} alt='skylight' className="mibuild-custom"/>
                            <div className="popover">
                                <h3 className="project-title-popover">MiBuild</h3>
                                <p className="project-description-popover">Built from the ground up, MiBuild is a portal connecting builders to trades while enabling an efficient build process, this case study will highlight my design process.</p>
                                <button className="case-study">Case Study</button>
                            </div>
                        </div>
                    </Link>
                    <Link to='/portfolio/MiScheduling'>
                        <div className="MiScheduling-card project">
                            <img src={require('../../assets/MiSchedulingCalendar.png')} alt='skylight' className="mischeduling-custom"/>
                            <div className="popover">
                                <h3 className="project-title-popover">MiScheduling</h3>
                                <p className="project-description-popover">Scheduling tool built from the ground up to meet specific buisness processes and requirements in the construction industry.</p>
                                <button className="case-study">Case Study</button>
                            </div>
                        </div>
                    </Link>
                    <Link to='/portfolio/skylight'>
                        <div className="skylight-card project">
                            <img src={require('../../assets/SkylightIpad.png')} alt='skylight' className="popover-skylight"/>
                            <div className="popover">
                                <h3 className="project-title-popover">Skylight</h3>
                                <p className="project-description-popover">A lifestyle first apartment search tool, offering concierge services for those who want a pain free experience.</p>
                                <button className="case-study">Case Study</button>
                            </div>
                        </div>
                    </Link>
                    <Link to='/portfolio/bundazzle'>
                        <div className="bundazzle-card project">
                            <img src={require('../../assets/BundazzleWidget.png')} alt='Bundazzle' className="popover-bundazzle"/>
                            <div className="popover">
                                <h3 className="project-title-popover">Bundazzle</h3>
                                <p className="project-description-popover">A bundling application for shopify stores, aiming to increase AOV.</p>
                                <button className="case-study">Case Study</button>
                            </div>
                        </div>
                    </Link>
                    <Link to='/portfolio/thirteenth'>
                        <div className="thirteenth-card project">
                            <img src={require('../../assets/HomePageThirteenth.png')} alt='Thirteenth Floor' className="popover-thirteenth"/>
                            <div className="popover">
                                <h3 className="project-title-popover">13th Floor Investments</h3>
                                <p className="project-description-popover">A complete redesign of collateral, for upcoming fundraising round.</p>
                                <button className="case-study">Case Study</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <br />
                <br />
                <div className="section-header-design">
                    <div className="header-wrapper">
                        <p className="section-subtitle">EXPLORE SOME OF MY FAVORITES</p>
                        <h2 className="section-header-title">PROTOTYPES</h2>
                    </div>
                </div>
                <div className="project-prototypes">
                <div className="project-proto">
                    <iframe 
                        title="easyclean" 
                        style={{border: "1px solid rgba(0, 0, 0, 0.1)", width: "800px", height: "450px"}} 
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfaOrSBO7QAnT1B2dD0e0sB%2FB-Clean%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D158-35122%26viewport%3D-2097%252C-658%252C0.29%26scaling%3Dscale-down%26starting-point-node-id%3D158%253A35122%26mode%3Ddesign"
                        allowFullScreen
                    /> 
                </div>
                <div className="project-proto">
                    <iframe 
                        title="Poller"
                        style={{border: "1px solid rgba(0, 0, 0, 0.1)", width: "800px", height: "450px"}} 
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3qtYLunYhlpaNUnq6Tb2Wr%2FPoller%3Fpage-id%3D21%253A2%26type%3Ddesign%26node-id%3D42-676%26viewport%3D623%252C355%252C0.21%26scaling%3Dscale-down%26starting-point-node-id%3D21%253A119%26show-proto-sidebar%3D1%26mode%3Ddesign" 
                        allowFullScreen
                    />
                </div>
                <div className="project-proto">
                    <iframe 
                        title="mischeduling" 
                        style={{border: "1px solid rgba(0, 0, 0, 0.1)", width: "800px", height: "450px"}} 
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQUIkV3RwArBUc6SOlnlwfl%2FMiScheduling-Portfolio%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2016%26viewport%3D145%252C242%252C0.11%26scaling%3Dmin-zoom%26starting-point-node-id%3D1%253A2016%26show-proto-sidebar%3D1%26mode%3Ddesign" 
                        allowFullScreen
                    />
                </div>
                </div>
                <br/>
                <br/>
                <div className="section-header-design">
                    <div className="header-wrapper">
                        <p className="section-subtitle">EXPLORE PREVIOUS DESIGN WORKS</p>
                        <h2 className="section-header-title">DESIGN GALLERY</h2>
                    </div>
                    <div className="discover-wrapper">
                        <p className="discover-button" onClick={() => setShow(true)}>DISCOVER</p>
                        <img src={require('../../assets/right-wedge.png')} alt="directional arrow" className="wedge" />
                    </div>
                </div>
                <div className="gallery-section-grid">
                    <div className="design-container" onClick={() => setShow(true)}>
                        <img src={require('../../assets/CollageMockup.png')} alt="tile" className='gallery-tile' />
                    </div>
                    <div className="design-container second" onClick={() => setShow(true)}>
                        <img src={require('../../assets/RugRadioFinal.png')} alt="tile" className='gallery-tile' />
                    </div>
                    <div className="design-container third" onClick={() => setShow(true)}>
                        <img src={require('../../assets/CryptoCrowdFinal.png')} alt="tile" className='gallery-tile' />
                    </div>
                </div>
                <Modal show={show} setShow={setShow} modalName="Gallery">
                    <div className="gallery-grid">
                        <img src={require('../../assets/RugRadioFinal.png')} alt='collage' className="grid-item"/>
                        <img src={require('../../assets/CollageMockup.png')} alt='collage' className="grid-item"/>
                        <img src={require('../../assets/CryptoCrowdFinal.png')} alt='collage' className="grid-item"/>
                        <img src={require('../../assets/BundazzleFinalIteration.png')} alt='collage' className="grid-item"/>
                        <img src={require('../../assets/HomePage.png')} alt='collage' className="grid-item"/>
                        <img src={require('../../assets/RefConMobile.png')} alt='collage' className="grid-item"/>
                        <img src={require('../../assets/ArtStoreFinal.png')} alt='collage' className="grid-item"/>
                        <img src={require('../../assets/SkylightIpad.png')} alt='collage' className="grid-item"/>
                    </div>
                </Modal>
            </body>
            <div className="divider"></div>
            <section clasName='graphic-section'>
                <img src={require('../../assets/Design_Graphic.png')} alt="graphic" className="pd-graphic" />
            </section>
        </>
    )
}

export default PortfolioPage;