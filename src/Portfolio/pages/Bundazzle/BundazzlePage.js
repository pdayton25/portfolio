import React, {useEffect} from "react";
import './BundazzlePage.css';


//components
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const Bundazzle = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);
  
  let mainColor = '#3FB25F';

  return (
    <div className="page-container">
      <section className="project-header bundazzle-header">
        <div className="bund-content-container">
          <div className="bund-container">
            <img src={require('../../../assets/BundazzleLogo.png')} alt='bundazzle-logo' className="skylight-logo"/>
            <p className="project-description black">A bundling application for shopify stores, aiming to increase AOV.</p>
          </div>
        </div>
        <div className="bundazzle-img-container">
          <img src={require('../../../assets/BundazzleFinalIteration.png')} alt='skylight' className="bundazzle-img"/>
        </div>
      </section>
      <SectionHeader title='Overview' color={mainColor} />
      <section className="section">
                <p className="project-overview">Bundazzle is a shopify application focused on increasing AOV through product bundling. This study takes you through the inception of the idea, research performed, and the translation of that feedback to create a gamified bundling experience for the user.</p>
                <div className="details-container">
                    <div className="img-wrapper">
                        <img src={require('../../../assets/BundazzleLaptopMockup.png')} alt='skylight mockup' className="skylight-mockup"/>
                    </div>
                    <div className="overview-content-container">
                        <div className="top-content">
                            <h3 className="content-header">Problem</h3>
                            <p className="content-p">Shopify stores are looking to increase AOV through bundling. Exsisting technology is rigid and does not allow users to easily create custom bundles.</p>
                        </div>
                        <div className="bottom-content">
                            <div>
                                <h3 className="content-header">Role</h3>
                                <p className="content-p">Lead UI/UX Designer (Team of 2)</p>
                            </div>
                            <div>
                                <h3 className="content-header">Duration</h3>
                                <p className="content-p">5 months (ongoing)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      <SectionHeader title='Research' color={mainColor} />
      <section className="section">
        <p className="content-p">I spoke with shopify store owners I had previously worked with via a previous shopify application.</p>
        <p className="content-p">After picking their brains, the most requested features were custom user generated bundles, and a recurring campaign feature. This helped guide the definition of our goals.</p>
        <div className="bund-research-container">
          <div className="left-reasearch-container">
            <h4 className="content-header">Goals</h4>
            <ul className="list-container">
              <li className="list-p">Provide custom user generated bundles</li>
              <li className="list-p">Gameify the bundling experience, and improving store engagement</li>
              <li className="list-p">Provide a recurring campaign feature for shopify stores</li>
              <li className="list-p">Genericize widget to seemlessly fit into a vast majority of stores with simple design modifications</li>
            </ul>
          </div>
          <div className="right-research-container-bund">
              <h4 className="content-header">Initial Wireframe</h4>
              <div className="wireframe-wrapper">
                <img src={require('../../../assets/BundazzleWireframe.png')} alt='bundazzle example' className="bund-wireframe" />
              </div>
          </div>
        </div>

      </section>
      <SectionHeader title='User Flow' color={mainColor} />
      <section className="section">
        <p className="content-p">Given my research and inital wireframe, I created a user flow to aid in further refining how the application should operate and the necessary elements to accoplish our goals.</p>
        <h4 className="list-header">Site Visitor</h4>
        <img src={require('../../../assets/UserFlowBundazzle.png')} alt="bundazzle userflow" className="userflow" />
      </section>
      <SectionHeader title='Design Process' color={mainColor} />
      <section className="section">
        <h4 className="content-header large">Widget</h4>
        <div className="bund-research-container">
          <div className="left-reasearch-container">
            <h4 className="list-header m-top">Establishing Important Features</h4>
            <ul className="list-container">
              <li className="list-p">Bundle "progress" element</li>
              <li className="list-p">Bundle promotion callout</li>
              <li className="list-p">Add to bundle button</li>
              <li className="list-p">Current bundle items view</li>
              <li className="list-p">Add bundle to cart button</li>
              <li className="list-p">Bundle information (incl. savings)</li>
            </ul>
          </div>
          <div className="right-research-container">
            <img src={require('../../../assets/BundazzleFinalIteration.png')} alt="bundazzle mockup" className="full-width" />
          </div>
        </div>
        <h4 className="list-header">Iterations</h4>
        <br/>
        <img src={require('../../../assets/BundazzleIterations.png')} alt="bundazzle iterations" className="full-width" />
        <br/>
        <h4 className="list-header">From each iteration:</h4>
        <ol>
          <li className="list-p">Initial</li>
          <li className="list-p">Added bundle button for a more intuitive feel adding items to bundle, previously triggered by standard “add to cart button” on exsisting page.</li>
          <li className="list-p">Transitioned to card stack for promotions, providing a cleaner UI and further gameifying the bundling experience.</li>
          <li className="list-p">Used feeback from usability test. Made transition to progress bar, as it provided better user feedback as to their reached promotions</li>
          <li className="list-p">Simplified progress bar to reduce visual load on user</li>
          <li className="list-p">Added progress bar callout (incentivizes adding additional items to bundle), Refined progress bar to provide more defined feedback for user. Added “x” to bundle items allowing user to easily remove items. Enhanced and added discount tag to draw user attention to checkout the bundle.</li>
        </ol>
        <h4 className="content-header large">Admin Panel</h4>
        <div className="bund-research-container">
          <div className="left-research-container">
            <h4 className="list-header m-top">Based upon the widget I determinded the admin panel should include:</h4>
            <ul>
              <li className="list-p">Home Page</li>
              <li className="list-p">Campaign Page</li>
              <li className="list-p">Rules/Segments Page</li>
              <li className="list-p">Designs Page</li>
            </ul>
            <h4 className="list-header">Multipurpose Camapaign Page</h4>
            <ul>
              <li className="list-p">Serves as quickstart page for first campaign</li>
              <li className="list-p">Allows store owners to quickly assemble campaigns based on previously selected/created options increasing usability.</li>
            </ul>
          </div>
          <div className="right-research-container">
            <img src={require('../../../assets/CampaignsBundazzle.png')} alt="admin panel page" className='bundazzle-admin' />
          </div>
        </div>
      </section>
      <SectionHeader title='Usability Testing' color={mainColor} />
      <section className="section">
        <div className="bund-research-container">
          <div className="left-side">
            <h4 className="list-header mid-width">Using our dummy store, we performed a usability test for the widget</h4>
          </div>
          <div className="right-side">
              <h4 className="content-header">Iteration Tested</h4>
              <img className="bundazzle-admin" src={require('../../../assets/ThirdIterationBundazzle.png')} alt="iteration tested" />
          </div>
        </div>
        <div className="bund-research-container">
          <div className="left-research-container">
            <h4 className="list-header">We asked users to do the following</h4>
            <ul>
              <li className="list-p">Add and remove items to their bundle.</li>
              <li className="list-p">Checkout bundle, up to the payment page.</li>
              <li className="list-p">Document and report their experience. </li>
            </ul>
            
          </div>
          <div>
            <h4 className="list-header">Findings</h4>
            <ul>
              <li className="list-p">Stack made # of remaining promotions unclear.</li>
              <li className="list-p">Bundle total and discount acheived not defined on “Add Bundle to Cart” button</li>
              <li className="list-p">Show bundle button to expand bundle created friction with users wanting to view or modify exsisting bundle.</li>
              <li className="list-p">Creating a more interactive experience through animations would greatly benefit the experience.</li>
            </ul>
          </div>
        </div>
      </section>
      <SectionHeader title='Conclusion' color={mainColor} />
      <section className="section">
        <h4 className="list-header">Release &amp; Analysis</h4>
        <ul>
          <li className="list-p">Anticipating the release near the end of this year I will be closely monitoring, AOV and conversion rates to determine the effectiveness of our application. </li>
          <li className="list-p">Communicating directly with stores who have activated our widget will allow for us to build additional features and refine existing design.</li>
          <li className="list-p">Information will be used to create a thorough whitepaper, and iterate on our current design.</li>
        </ul>
      </section>
      <footer className="bundazzle-foot">
        <h4 className="content-header margin-top">Thanks for reading!</h4>
        <img className="pdp" src={require('../../../assets/BundazzlePDP.png')} alt='pdp view'/>
      </footer>
    </div>
  )
}

export default Bundazzle;


//use these classes page-container, section
// center align: content-p content-header
//left align: list-p list-header
//project-description, project-overveiw