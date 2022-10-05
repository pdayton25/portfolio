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
                <p className="project-overview">Setting out on a mission to restructure how apartment searches are performed began with the idea of introducing lifestyles as a filterable option. Long are the days of filtering by price only to end up in an undesirable location void of perfered lifestyle amenities.</p>
                <div className="details-container">
                    <div className="img-wrapper">
                        <img src={require('../../../assets/MaskedSkylight.png')} alt='skylight mockup' className="skylight-mockup"/>
                    </div>
                    <div className="overview-content-container">
                        <div className="top-content">
                            <h3 className="content-header">Problem</h3>
                            <p className="content-p">Finding an apartment is easy. Finding the right apartment that matches your lifestyle, in an unfamiliar area, is next to impossible. The availability of location based lifestyle information at the apartment search level is nonexsistant.</p>
                        </div>
                        <div className="bottom-content">
                            <div>
                                <h3 className="content-header">Role</h3>
                                <p className="content-p">Sole UI/UX Designer</p>
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
                        <p className="list-p">Hundreds of prospective tenant interviews were performed over a period of 4 months.</p>
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
                                <li className="list-p">Communication / Responsiveness from managers is severely lacking.</li>
                                <li className="list-p">Apartment searching is incredibly time intensive</li>
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
            <SectionHeader title="Design Process" color="#5B99F6" />
            <section className="section">
                <div className="design-content-wrapper">
                    <img src={require('../../../assets/SkylightWireFrame.png')} alt='wire frame' className="userflow shadow"/>                    <p className="content-p">I initially concepted the idea of making apartment hunting more similar to tinder. But ultimately landed on the traditional map and listing view because it would allow users to see all options and feel as though they have found the best option.</p>
                    <p className="content-p">A secondary benefit to the map view is that is more easily allows for us to display a “lifestyle fit” showing users the locations and activites in close proximity that meet their needs. </p>
                </div>
                <div className="group">
                    <div className="point-item">
                        <h4 className="content-header design-item">Color:</h4>
                        <p className="content-p design-item">Simple color pallete allows for apartments and surrounding amenities to stand out</p>
                    </div>
                    <div className="point-item">
                        <h4 className="content-header design-item">Familiarity:</h4>
                        <p className="content-p design-item">UI similar to competitors to reduce navigational friction </p>
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
                <a href='https://www.figma.com/proto/3zzplpDIHvlXwbv1iN4Nso/Map-Search?page-id=0%3A1&node-id=2%3A26&viewport=337%2C314%2C0.1&scaling=scale-down&starting-point-node-id=2%3A26' target="_blank" className="center">
                    <img src={require('../../../assets/SkylightHome.png')} alt='prototype' className="userflow shadow medium filter"/>
                </a>
            </section>
            <SectionHeader title="Takeaways" color="#5B99F6" />
            <section className="section">
                <div className='findings'>
                    <h4 className="list-header">Key Findings</h4>
                    <p className="list-p small-top-margin">After debuting the protoype to a group of 10 colleagues, the summation of the feedback included appreciation for:</p>
                    <ul className="remove-margin">
                        <li className="list-p">Simpler UI that contained similarities to all previous search platforms used.</li>
                        <li className="list-p">Improved availability of lifestyle &amp; amenity information</li>
                        <li className="list-p">Optionality for a hands off approach to finding their new apartment.</li>
                    </ul>
                </div>
                <div className='metrics'>
                    <h4 className="list-header">Metrics of Success</h4>
                    <p className="list-p small-top-margin">Pending release, the metrics I would have closely looked at to determine how effective the product is includes the average time on page, task success rate, and use real user monitoring to determine how to best adjust the page to further improve usability.</p>
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