import React from "react";
import { Link } from "react-router-dom";

//Styles
import './PortfolioPage.css';


const PortfolioPage = () => {

    const handleDownloadClick = () => {
        fetch('Patrick_Dayton_UX_Designer.pdf').then(response => {
            console.log(response)
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
                <li>
                    Resume
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </header>
        <body className="project-body">
            <Link to='/portfolio/Skylight'>
                <div className="skylight-card project">
                    <img src={require('../../assets/SkylightIpad.png')} alt='skylight' className="popover-skylight"/>
                    <div className="popover">
                        <h3 className="project-title-popover">Skylight</h3>
                        <p className="project-description-popover">A lifestyle first apartment search tool, offering concierge services for those who want a pain free experience.</p>
                        <button className="case-study">Case Study</button>
                    </div>
                </div>
            </Link>
            <Link to='./portfolio/Bundazzle'>
                <div className="bundazzle-card project">
                    <img src={require('../../assets/BundazzleWidget.png')} alt='Bundazzle' className="popover-bundazzle"/>
                    <div className="popover">
                        <h3 className="project-title-popover">Bundazzle</h3>
                        <p className="project-description-popover">Cliffnote description</p>
                        <button className="case-study">Case Study</button>
                    </div>
                </div>
            </Link>
            <Link to='./portfolio/Thirteenth'>
                <div className="thirteenth-card project">
                    <img src={require('../../assets/HomePageThirteenth.png')} alt='Thirteenth Floor' className="popover-thirteenth"/>
                    <div className="popover">
                        <h3 className="project-title-popover">13th Floor Investments</h3>
                        <p className="project-description-popover">Cliffnote description</p>
                        <button className="case-study">Case Study</button>
                    </div>
                </div>
            </Link>
            <Link to='/portfolio/RefCon'>
                <div className="refcon-card project">
                    <img src={require('../../assets/RefConMockup.png')} alt='RefCon' className="popover-refcon"/>
                    <div className="popover">
                        <h3 className="project-title-popover">RefCon</h3>
                        <p className="project-description-popover">Cliffnote description</p>
                        <button className="case-study">Case Study</button>
                    </div>
                </div>
            </Link>
        </body>
        <footer className="footer-container">
            <div className="portfolio-footer">
                <div className="contact" mailto='patrick.dayton24@gmail.com'>Contact</div>
                <button onClick={handleDownloadClick} className="pdf">Patrick_Dayton_UX_Designer.pdf</button>
            </div>
        </footer>
        </>
    )
}

export default PortfolioPage;