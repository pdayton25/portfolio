import React from "react";
import { Link } from "react-router-dom";

//Styles
import './PortfolioPage.css';

//pdf
import pdf from '../../assets/Patrick_Dayton_UX_Designer.pdf';


const PortfolioPage = () => {

    const handleDownloadClick = () => {
        fetch('../assets/Patrick_Dayton_UX_Designer.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Patrick_Dayton_UX_Designer.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <header className="portfolio-header">
                <h1 className="portfolio-logo">Patrick Dayton</h1>
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
            <body className="project-body">
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
                <Link to='/portfolio/refcon'>
                    <div className="refcon-card project">
                        <img src={require('../../assets/RefConMockup.png')} alt='RefCon' className="popover-refcon"/>
                        <div className="popover">
                            <h3 className="project-title-popover">RefCon</h3>
                            <p className="project-description-popover">Collage is the one stop shop to view and display your NFTs across networks.</p>
                            <button className="case-study">Case Study</button>
                        </div>
                    </div>
                </Link>
            </body>
            <footer className="footer-container">
            </footer>
        </>
    )
}

export default PortfolioPage;