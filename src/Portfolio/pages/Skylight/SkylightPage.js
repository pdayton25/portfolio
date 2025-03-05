import React,{useEffect} from "react";
//Syles
import './SkylightPage.css';

//components
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const SkylightPage = () => {

    useEffect(() => {
        window.scrollTo(0,0);
      },[]);
      
    return (
        <div className="page-container">
            <section className="project-header">
                <div className="header-img-container">
                <img src={require('../../../assets/SkylightIpad.png')} alt='skylight' className="skylight-img"/>
                </div>
                <div className="content-container">
                    <img src={require('../../../assets/SkylightConciergeLogo.png')} alt='skylight-logo' className="skylight-logo"/>
                    <p className="project-description">A lifestyle first apartment search tool, offering concierge services for those who want a pain free experience.</p>
                </div>
            </section>
            <SectionHeader title="Overview" color="#5B99F6" />
            <section className="section">
                <p className="project-overview">Our aim was to reimagine the entire apartment search experience, initially exploring catering to tenants lifestyle preferences. With a younger generation becoming renters we theorized lifestyle &amp; surrounding ammenities play a larger part in the decision making process.</p>
                <div className="details-container">
                    <div className="img-wrapper">
                        <img src={require('../../../assets/MaskedSkylight.png')} alt='skylight mockup' className="skylight-mockup"/>
                    </div>
                    <div className="overview-content-container">
                        <div className="top-content">
                            <h3 className="content-header">Problem</h3>
                            <p className="content-p">Finding an apartment is easy. Finding the right apartment that matches your lifestyle, in an unfamiliar area, is nearly impossible. The availability of location based lifestyle information on existing platforms (Zillow, Apartments.com, etc.) did not exist.</p>
                        </div>
                        <div className="bottom-content">
                            <div>
                                <h3 className="content-header">Role</h3>
                                <p className="content-p">Product Designer</p>
                            </div>
                            <div>
                                <h3 className="content-header">Duration</h3>
                                <p className="content-p">4 months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionHeader title="Research" color="#5B99F6" />
            <section className="section">
                <div className="research-section-container">
                    <div className="left-research-container">
                        <p className="list-p">Hundreds of prospective tenant interviews were performed over a period of 4 months. Our mission was to uncover what drove the decision making process of the younger generation.</p>
                        <div>
                            <h4 className="list-header">Questions asked:</h4>
                            <ul>
                                <li className="list-p">What are the most important qualifying factors for an apartment?</li>
                                <li className="list-p">Where are the pain points in your apartment search?</li>
                                <li className="list-p">How do you currently search for apartments?</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Conclusions:</h4>
                            <ul>
                                <li className="list-p">Lifestyle &amp; Amenitites provided should be emphasized.</li>
                                <li className="list-p">Communication / Responsiveness from managers leaves something to be desired.</li>
                                <li className="list-p">Searching for apartments is incredibly time intensive and becomes very difficult to filter properly</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-research-container">
                        <img src={require('../../../assets/SkylightDropdownGraphic.png')} className='skylight-dropdown-graphic' alt='graphic'/>
                    </div>
                </div>
                <div className="goal-section">
                    <div className="table-row">
                        <h4 className="content-header">Goals</h4>
                        <div></div>
                        <h4 className="content-header">Proposed Solution</h4>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li className="list-p">Highlight lifestyle associated with apartment and surrounding area</li>
                        </ul>
                        <img src={require('../../../assets/ArrowRight.png')} alt='graphic'className="graphic"/>
                        <img src={require('../../../assets/Lifestyle.png')} alt='graphic'className="graphic"/>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li className="list-p">Limit dependency on apartment manager responsiveness</li>
                        </ul>
                        <img src={require('../../../assets/ArrowRight.png')} alt='graphic'className="graphic"/>
                        <img src={require('../../../assets/ScheduleTourButton.png')} alt='graphic' className="graphic"/>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li className="list-p">Provide streamlined &amp; hands off alternative to apartment hunting.</li>
                        </ul>
                        <img src={require('../../../assets/ArrowRight.png')} alt='graphic'className="graphic"/>
                        <img src={require('../../../assets/SkylightConciergeButton.png')} alt='graphic' className="graphic"/>
                    </div>
                </div>
            </section>
            <SectionHeader title="User Flows" color="#5B99F6" />
            <section className="section">
                <p className="content-p">I created flows for the two distinct users, apartment seekers, and owners/managers creating the listings</p>
                <h3 className="list-header">Prospective Tenant</h3>
                <img src={require('../../../assets/UserFlowSkylight.png')} alt='user flow' className="userflow" />
                <h3 className="list-header">Apartment Owner/Manager</h3>
                <img src={require('../../../assets/OwnerFlowSkylight.png')} alt='user flow' className="userflow" />
            </section>
            <SectionHeader title="Site Map" color="#5B99F6" />
            <section className="section">
                <img src={require('../../../assets/SiteMapSkylight.png')} alt="site map" className="userflow" />
            </section>
            <SectionHeader title="Design Iterations" color="#5B99F6" />
            <section className="section">
                <div className="design-content-wrapper">
                    <img src={require('../../../assets/SkylightWireFrame.png')} alt='wire frame' className="userflow shadow"/>                    
                    <p className="content-p">I initially presented the idea of making the apartment hunting experience more similar to tinder. We ultimately landed on the traditional map view as it would allow for us to leverage a well understood design pattern.</p>
                    <p className="content-p">A secondary benefit to the map view is that is more easily allows for us to display a “lifestyle fit” showing users the locations and activites in close proximity that meet their needs. </p>
                </div>
                <div className="group">
                    <div className="point-item">
                        <h4 className="content-header design-item">Color:</h4>
                        <p className="content-p design-item">Simple color pallete allows for apartments and surrounding amenities to stand out</p>
                    </div>
                    <div className="point-item">
                        <h4 className="content-header design-item">Familiarity:</h4>
                        <p className="content-p design-item">A similar look and feel to competitiors allow users to immediately understand how to use the application.</p>
                    </div>
                    <div className="point-item">
                        <h4 className="content-header design-item">Platforms/Devices:</h4>
                        <p className="content-p design-item">Modular design allows flexibility for new features</p>
                    </div>
                </div>
                <img src={require('../../../assets/SkylightPointGraphic.png')} alt='bullet points' className="userflow"/>
            </section>
            <SectionHeader title="Prototype" color="#5B99F6" />
            <section className="section center">
                <a href='https://www.figma.com/proto/3zzplpDIHvlXwbv1iN4Nso/Map-Search?page-id=0%3A1&node-id=2%3A26&viewport=337%2C314%2C0.1&scaling=scale-down&starting-point-node-id=2%3A26' target="_blank" rel="noopener noreferrer" className="center">
                    <img src={require('../../../assets/SkylightHome.png')} alt='prototype' className="userflow shadow medium filter"/>
                </a>
            </section>
            <SectionHeader title="Takeaways" color="#5B99F6" />
            <section className="section">
                <div className='findings'>
                    <h4 className="list-header">Key Findings</h4>
                    <p className="list-p small-top-margin">After demoing the hifidelity protoype to my stakeholders, I was afforded valueable feedback:</p>
                    <ul className="remove-margin">
                        <li className="list-p">Providing an industry standard experience allowed users to immediately understand the product.</li>
                        <li className="list-p">Improved availability of lifestyle &amp; amenity information</li>
                        <li className="list-p">The concierge service flow is valueable, however it would not make it in the first iteration of the product</li>
                    </ul>
                </div>
                <div className='metrics'>
                    <h4 className="list-header">Product Release</h4>
                    <p className="list-p small-top-margin">The live version can be found at <a href="https://rent.getskylight.com" target="_blank" rel="noopener noreferrer"> rent.getskylight.com</a></p>
                </div>
            </section>
            <footer className="footer">
                <p className="end-text">Thanks for reading!</p>
                <img src={require('../../../assets/SkylightImageGroup.png')} alt="skylight group" className="image-group"/>
            </footer>
        </div>
    )
}

export default SkylightPage;

//add link to portfolio prototype
