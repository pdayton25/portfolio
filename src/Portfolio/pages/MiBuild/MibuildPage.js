import React,{useEffect} from "react";
//Syles
import './MiBuildPage.css';

//components
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const MiBuildPage = () => {

    useEffect(() => {
        window.scrollTo(0,0);
      },[]);
      
    return (
        <div className="page-container">
            <section className="project-header background-color-header">
                <div className="header-img-container">
                <img src={require('../../../assets/MiBuildConfiguration.png')} alt='MiBuild' className="scheduling-img"/>
                </div>
                <div className="content-container">
                    <img src={require('../../../assets/MiBuildLogo.png')} alt='mibuild-logo' className="skylight-logo"/>
                    <p className="project-description">MiBuild is one of the projects Im most proud to be apart of, I was tasked with creating an end to end experience for home builders looking to create a dynamic master schedule to reduce build times, while providing live insights from trades. Below will guide you through my design process</p>
                </div>
            </section>
            <SectionHeader title="Overview" color="#006064" />
            <section className="section">
                <p className="project-overview">This case study will cover how decisions were made for the configuration builder portion of MiBuild. The configuration builder allows for home builders to create dynamic master schedules for each home.</p>
                <div className="details-container">
                    <div className="img-wrapper">
                        <img src={require('../../../assets/HomeConfigurationsNS.png')} alt='skylight mockup' className="skylight-mockup"/>
                    </div>
                    <div className="overview-content-container">
                        <div className="top-content">
                            <h3 className="content-header">Objective</h3>
                            <p className="content-p">Buisness reached out with a problem. Home builders dont have an easy way to set up the home building process, maintain schedules, and have deeper insight into each trade's work.</p>
                        </div>
                        <div className="bottom-content">
                            <div>
                                <h3 className="content-header">Role</h3>
                                <p className="content-p">UX/UI Designer, *Product Manager</p>
                            </div>
                            <div>
                                <h3 className="content-header">Duration</h3>
                                <p className="content-p">6 months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionHeader title="Research" color="#006064" />
            <section className="section">
                <div className="research-section-container">
                    <div className="left-research-container">
                        <p className="list-p">In the absence of a product team, I took the initiative to define what the configuration builder would include, how it is expected to behave, and creating end to end flows as a road map for my design process.</p>
                        <div>
                            <h4 className="list-header">Requirements:</h4>
                            <ul>
                                <li className="list-p">The home configuration needed to be easily replicated for each new home a builder enters.</li>
                                <li className="list-p">Builders need the ability to pass down specific task requirements to trades</li>
                                <li className="list-p">Builders need the ability to create task dependencies.</li>
                                <li className="list-p">The configuration should be modifiable on the fly to ensure an efficient building process</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Research Findings:</h4>
                            <ul>
                                <li className="list-p">Taking inspiration from figma and finding its use of libraries incredibly helpful to improve my own workflow, I decided to include a similar feature within the configuration builder.</li>
                                <li className="list-p">To tackle the creation of dependencies for tasks I wanted to follow a well known pattern of creating dependency arrows, as well as allowing for a user to create dependencies within the table format as well.</li>
                                <li className="list-p">Allowing the builder to create task requirements for trades opened the door to cross team coordination. I took lead in ensuring this feature would be properly accounted for in our other products.</li>
                                <li className="list-p">Dependencies seem simple on the surface, but opened a can of worms when annotating the expected behavior. Leading the charge to annotate and communicate how dependencies would behave was quite an undertaking, but very rewarding.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-research-container">
                        <img src={require('../../../assets/Library.png')} className='skylight-dropdown-graphic' alt='graphic'/>
                    </div>
                </div>
            </section>
            <SectionHeader title="Flows" color="#006064" />
            <section className="section">
                <p className="content-p">In creating flows for the configuration builder, I worked with stakeholders to accurately define a process within the home build timeline. This allowed for me to workshop with other product teams to identify its impact on other MiView products.</p>
                <h3 className="list-header">Concrete Flow</h3>
                <img src={require('../../../assets/ConcreteFlow.png')} alt='user flow' className="userflow" />
            </section>





            <SectionHeader title="Design Process" color="#006064" />
            <section className="section">
                <p className="project-overview">Having clearly defined the product I began the lofi prototyping of the configuration builder</p>
                <div className="research-section-container research-padding">
                    <div className="left-research-container">                       
                        <div>
                            <h4 className="list-header">First Iteration</h4>
                            <ul>
                                <li className="list-p">A simple list flow which allows for builders to create a home configuration, and create dependencies in a hybrid stepper format.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Feedback:</h4>
                            <ul>
                                <li className="list-p">The user couldnt easily add library items to the configuration</li>
                                <li className="list-p">A visualization of the schedule was essential in understanding how the home is being configured.</li>
                                <li className="list-p">The configuration builder feature would only be available on a web/desktop version.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-research-container">
                        <img src={require('../../../assets/ConfigurationV1.png')} className='MiScheduling-dropdown-graphic' alt='graphic'/>
                    </div>
                </div>
                <div className="research-section-container-flip research-padding">
                    <div className="right-research-container">
                        <img src={require('../../../assets/ConfigurationV2.png')} className='MiScheduling-dropdown-graphic' alt='graphic'/>
                    </div>
                    <div className="left-research-container">                       
                        <div>
                            <h4 className="list-header">Second Iteration</h4>
                            <ul>
                                <li className="list-p">A more visual approach to the configuration process, introducing a side drawer which housed the library items to be used and a columned configuration builder.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Feedback:</h4>
                            <ul>
                                <li className="list-p">Stakeholders would prefer to have a table side by side with the visualization of the configuration.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="research-section-container research-padding">
                    <div className="left-research-container">                       
                        <div>
                            <h4 className="list-header">Final Iteration</h4>
                            <ul>
                                <li className="list-p">A side by side task table with a gantt chart visualization of the configuration.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Feedback:</h4>
                            <ul>
                                <li className="list-p">Stakeholders were very satisfied with the result, after a few minor modifications I cleaned up my design file, annotated and provided a dev walkthrough for a lofi handoff.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-research-container">
                        <img src={require('../../../assets/ConfigurationV3.png')} className='MiScheduling-dropdown-graphic' alt='graphic'/>
                    </div>
                </div>
            </section>
            <SectionHeader title="Takeaways" color="#006064" />
            <section className="section">
                <div className='findings'>
                    <h4 className="list-header">Takeaways</h4>
                    <p className="list-p small-top-margin">Dipping my toes in product management helped adjust my design process.</p>
                    <ul className="remove-margin">
                        <li className="list-p">Gathering a corpus of product requirements before even touching figma helped streamline the wireframing process tremendously.</li>
                        <li className="list-p">Stakeholders and the buisness side have a ton of great ideas, working with them define which features make the MVP, and subsequently the MMP was eyeopening understanding their perspective.</li>
                        <li className="list-p">Cross product coordination is paramount when handling a product that touches many products within the ecosystem. Leading that communication was a great leadership growth opportunity.</li>
                    </ul>
                </div>
                <div className='metrics'>
                    <h4 className="list-header">Development</h4>
                    <p className="list-p small-top-margin">The dev team is currently working on the MVP of MiBuild, which includes the Configuration Builder. I expect this to be released by end of Q1 2024, and will continue to provide support with any questions dev has in the meantime.</p>
                </div>
            </section>
            <footer className="footer">
                <p className="end-text">Thanks for reading!</p>
            </footer>
        </div>
    )
}

export default MiBuildPage;

//add link to portfolio prototype