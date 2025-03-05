import React,{useEffect} from "react";
//Syles
import './MiSchedulingPage.css';

//components
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const MiSchedulingPage = () => {

    useEffect(() => {
        window.scrollTo(0,0);
      },[]);
      
    return (
        <div className="page-container">
            <section className="project-header">
                <div className="header-img-container">
                <img src={require('../../../assets/MiSchedulingCalendar.png')} alt='MiScheduling' className="scheduling-img"/>
                </div>
                <div className="content-container">
                    <img src={require('../../../assets/MiSchedulingLogo.png')} alt='scheduling-logo' className="skylight-logo"/>
                    <p className="project-description">The MiScheduling is module designed to meet the specific buisness and workflow requirements for new home construction scheduling and dispatch.</p>
                </div>
            </section>
            <SectionHeader title="Overview" color="#0D47A1" />
            <section className="section">
                <p className="project-overview">We set out to create a scheduling and dispatch solution from the ground up within the construction industry. Specifically targeting exsisting manual processes.</p>
                <div className="details-container">
                    <div className="img-wrapper">
                        <img src={require('../../../assets/SchedulingMacBook.png')} alt='skylight mockup' className="skylight-mockup"/>
                    </div>
                    <div className="overview-content-container">
                        <div className="top-content">
                            <h3 className="content-header">Problem</h3>
                            <p className="content-p">Our primary stakeholder needed to migrate away from a deprecated scheduling software. Exsisting solutions didnt adequately meet buisness requirements. The primary goals were to streamline the scheduling process, eliminate manual "pen and paper" tasks to reduce the error rate, and provide executives with complete oversight of the scheduling process.</p>
                        </div>
                        <div className="bottom-content">
                            <div>
                                <h3 className="content-header">Role</h3>
                                <p className="content-p">Product Designer</p>
                            </div>
                            <div>
                                <h3 className="content-header">Duration</h3>
                                <p className="content-p">6 months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionHeader title="Research" color="#0D47A1" />
            <section className="section">
                <div className="research-section-container">
                    <div className="left-research-container">
                        <p className="list-p">Twice weekly meetings were held for 1 month to gather and document stakeholder requirements for the scheduling module.</p>
                        <div>
                            <h4 className="list-header">Findings:</h4>
                            <ul>
                                <li className="list-p">Current scheduling software does not handle many of the basic buisness processes, many are still done manually.</li>
                                <li className="list-p">Immediate visibility to critical decision making information was essential</li>
                                <li className="list-p">Executives must have insight to job flow, current issues, and crew workload.</li>
                                <li className="list-p">Exsisting scheduling process via email is extremely error prone, leading to increased cycle time.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Conclusions:</h4>
                            <ul>
                                <li className="list-p">We identified many manual workflows that could be streamlined within the scheduling application.</li>
                                <li className="list-p">All critical information is surfaced for the scheduler to make quick informed decisions</li>
                                <li className="list-p">Executives will have the ability to view, audit, and generate reports of all scheduling activities.</li>
                                <li className="list-p">We minimized the loss of scheduling communications via email, by permitting builders to update home status and request to schedule inside a portal.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-research-container">
                        <img src={require('../../../assets/MiSchedulingCreateHome.png')} className='skylight-dropdown-graphic' alt='graphic'/>
                    </div>
                </div>
            </section>
            <SectionHeader title="Flows" color="#0D47A1" />
            <section className="section">
                <p className="content-p">Below shows how a stage progresses through the MiScheduling module.</p>
                <h3 className="list-header">New Stage</h3>
                <img src={require('../../../assets/NHCJobGraphic.png')} alt='user flow' className="userflow" />
            </section>





            <SectionHeader title="Design Process" color="#0D47A1" />
            <section className="section">
                <p className="project-overview">This next section will highlight a few key areas of focus during the design process and how each problem was handled.</p>
                <div className="research-section-container research-padding">
                    <div className="left-research-container">                       
                        <div>
                            <h4 className="list-header">Problem:</h4>
                            <ul>
                                <li className="list-p">Users werent able to easily visualize the exsisting approvals on any given day leading to issues with over or under approving jobs</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Solution:</h4>
                            <ul>
                                <li className="list-p">I provided the user a banner style calendar which allows them to easily make approval decisions on the fly.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-research-container">
                        <img src={require('../../../assets/MiSchedulingApprovals.png')} className='MiScheduling-dropdown-graphic' alt='graphic'/>
                    </div>
                </div>
                <div className="research-section-container-flip research-padding">
                    <div className="right-research-container">
                        <img src={require('../../../assets/MiSchedulingConfirmations.png')} className='MiScheduling-dropdown-graphic' alt='graphic'/>
                    </div>
                    <div className="left-research-container">                       
                        <div>
                            <h4 className="list-header">Problem:</h4>
                            <ul>
                                <li className="list-p">Job confirmations is a manual and time consuming process, requiring the scheduling team to email and call each builder, manually recording their responses.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Solution:</h4>
                            <ul>
                                <li className="list-p">I aimed to solve the problem by centralizing the confirmations workload allowing the scheduling team to mostly automate emails and confirmations. The next initiative following the MiScheduling module allows builders create job requests & confirm stages without the scheduling team's assistance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="research-section-container research-padding">
                    <div className="left-research-container">                       
                        <div>
                            <h4 className="list-header">Problem:</h4>
                            <ul>
                                <li className="list-p">Exsisting system for assignments lacks context to a crew's previous day of work. Efficiently assigning crews based on job proximity was very difficult and required memorizing crew locations and job locations. Assignments process previously done by laying out folders for crews and placing the job packets inside folders.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="list-header">Solution:</h4>
                            <ul>
                                <li className="list-p">I designed the assignments with the specific intent of providing the user each crews proximity as well as their previous days schedule.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-research-container">
                        <img src={require('../../../assets/MiSchedulingAssignments.png')} className='MiScheduling-dropdown-graphic' alt='graphic'/>
                    </div>
                </div>
            </section>






            <SectionHeader title="Prototype" color="#0D47A1" />
            <section className="section center">
            <div className="project-proto">
                    <iframe 
                        title="mischeduling" 
                        style={{border: "1px solid rgba(0, 0, 0, 0.1)", width: "800px", height: "450px"}} 
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQUIkV3RwArBUc6SOlnlwfl%2FMiScheduling-Portfolio%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2016%26viewport%3D145%252C242%252C0.11%26scaling%3Dmin-zoom%26starting-point-node-id%3D1%253A2016%26show-proto-sidebar%3D1%26mode%3Ddesign" 
                        allowFullScreen
                    />
                </div>
            </section>
            <SectionHeader title="Takeaways" color="#0D47A1" />
            <section className="section">
                <div className='findings'>
                    <h4 className="list-header">Key Findings</h4>
                    <p className="list-p small-top-margin">In reflection after handoff, this project taught me:</p>
                    <ul className="remove-margin">
                        <li className="list-p">Balancing executive requests while accomodating the user's needs is essential for a successful project.</li>
                        <li className="list-p">Managing scope creep requires thorough documentation of requirements, and buy in from stakeholders.</li>
                        <li className="list-p">Information density is preferred among the scheduling users, feedback suggests it aids in reducing the required clicks to access desired information.</li>
                    </ul>
                </div>
                <div className='metrics'>
                    <h4 className="list-header">Development</h4>
                    <p className="list-p small-top-margin">Our designs have been delivered to the dev team, we continue to work directly with them as they progress through the development process.</p>
                </div>
            </section>
            <footer className="footer">
                <p className="end-text">Thanks for reading!</p>
                <img src={require('../../../assets/MiSchedulingApprovals.png')} alt="skylight group" className="image-group"/>
            </footer>
        </div>
    )
}

export default MiSchedulingPage;

//add link to portfolio prototype
