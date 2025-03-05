import React, {useEffect} from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import './ThirteenthPage.css';

const ThirteenthPage = () => {
  let mainColor='#2E9CCA'

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  return (
    <div className="page-container">
      <section className="project-header th-header">
        <div className="bund-content-container">
          <div className="bund-container">
            <img src={require('../../../assets/ThirteenthFloorLogo.png')} alt='bundazzle-logo' className="skylight-logo"/>
            <p className="project-description">A complete redesign of collateral, for upcoming fundraising round.</p>
          </div>
        </div>
        <div className="bundazzle-img-container">
          <img src={require('../../../assets/HomePage.png')} alt='13th Floor' className="bundazzle-img"/>
        </div>
      </section>
      <SectionHeader title='Overview' color={mainColor}/>
        <section className="section">
            <p className="project-overview">13th Floor had reached out to have me overhaul their exsisting collateral for their Fund V fundraising round. This study will take you through the research, design system and implementation.</p>
            <div className="th-details-container">
                <div className="th-img-wrapper">
                    <img src={require('../../../assets/CoreExpertise.png')} alt='core expertise page' className="skylight-mockup"/>
                </div>
                <div className="overview-content-container">
                    <div className="top-content">
                        <h3 className="content-header">Problem</h3>
                        <p className="content-p">Exsisting design was dated, and information was difficult to read and understand</p>
                    </div>
                    <div className="bottom-content">
                        <div>
                            <h3 className="content-header">Role</h3>
                            <p className="content-p">Product Designer</p>
                        </div>
                        <div>
                            <h3 className="content-header">Duration</h3>
                            <p className="content-p">2 months</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <SectionHeader title='Research' color={mainColor}/>
        <section className="section">
          <p className="content-p">13th Floor had reached out to have me overhaul their exsisting collateral for their Fund V fundraising round. This study will take you through the research, design system and implementation.</p>
          <div className="th-grid">
            <div className="grid-item">
              <h4 className="content-header">Scope</h4>
              <ul>
                <li className="list-p">Redesign Firm Overview collateral for upcoming funraising round</li>
                <li className="list-p">Graphical Design for 13th Floor Developement Logo</li>
              </ul>
            </div>
            <div className="grid-item">
              <h4 className="content-header">Goals</h4>
              <ul>
                <li className="list-p">Modernize collateral to convey a dynamic institutional grade company</li>
                <li className="list-p">Focus content to be conveyed in a concise manner</li>
              </ul>
            </div>
            <div className="grid-item">
              <h4 className="content-header">Mood Board</h4>
              <p className="content-p">As part of my research I created a mood board to guide the design direction I felt fit into their exsisting collateral without deviating too far away. </p>
            </div>
            <div className="grid-item">
              <img src={require('../../../assets/MoodBoard.png')} alt='mood board' className="mood-board" />
            </div>
          </div>
        </section>
      <SectionHeader title='Design Process' color={mainColor}/>
      <section className="section">
        <p className="content-p">Having researched 13th Floor and reviewing competitors collateral I began concepting a simple <strong className="bold">design system</strong> as a guide throughout the redesign</p>
        <div className="design-grid">
          <div className="grid-item">
            <h4 className="content-header">Graphic Inspiration</h4>
            <p className="content-p">I used architectural elements from their projects to guide graphical elements</p>
            <img src={require('../../../assets/DesignElementsTH.png')} className='mood-board' alt="graphical elements"/>
          </div>
          <div className="grid-item">
            <img src={require('../../../assets/DesignSystemTH.png')} alt="design system" className='th-mood-board th-margin-top' />
          </div>
        </div>
        <h4 className="content-header">Simplification</h4>
        <p className="content-p">Each page was meticulously simplified to focus on the information while providing striking graphics to catch the eye and elicit excitement and awe</p>
        <img src={require('../../../assets/BeforeAfterTH.png')} alt="before after" className="userflow" />
        <h4 className="content-header">Review Cycles</h4>
        <p className="content-p">Two review cycles were performed in order to refine the design for each page. Resulting in a polished product they are proud to present to potential investors</p>
        <br/>
      </section>
      <SectionHeader title='Conclusion' color={mainColor}/>
      <section className="section">
        <p className="content-p">Client satisfaction and a successful fundraising event were the two metrics by which I measured the success of the project.</p>
        <ul>
          <li className="list-p center">13th Floor Investments is satisfied with the designs received</li>
          <li className="list-p center">Redesigned Collateral aided in completing a $300MM fundraising round</li>
        </ul>
        <img src={require('../../../assets/THLayers.png')} className="userflow" alt="final design" />
      </section>
    </div>
  )
}
export default ThirteenthPage;


//use these classes page-container, section
// center align: content-p content-header
//left align: list-p list-header
//project-description, project-overveiw
