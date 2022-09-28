import React from 'react';
import MediaQuery from 'react-responsive';
import './Landing.css';


function Landing(props) {

  return (
    <div className="gradient-background-container">
      <div className="landing-text-container">
        <img src={process.env.PUBLIC_URL + "/assets/images/white-primary-logo.svg"} />
        <h1 style={{ color: 'white', margin: 0 }}>A social network <br></br> to just talk TV.</h1>
        <p className="landing-description">Discuss all the shows you love, <br></br> with people who do too.</p>
        <button className="download-button">Coming Soon</button>
      </div>
      <div className="landing-mockup-container">
        <img className="mockup" src={process.env.PUBLIC_URL + "/assets/images/cropped-landing-mockup.svg"} />
      </div>
    </div>






    // <div className= "temporary-gradient-background">
    //   <MediaQuery maxWidth={767}>
    //     <div className="landing-container-mobile">
    //       <div className= "landing-text-mobile">
    //         <img src={process.env.PUBLIC_URL + "/assets/images/white-primary-logo.svg"} />
    //         <h1 style={{color: 'white', margin: 0}}>A social network <br></br> to just talk TV.</h1>
    //         <p className= "landing-description">Discuss all the shows you love, <br></br> with people who do too.</p>
    //         <button className="launch-button">Launching October 24th</button>
    //       </div>
    //       <div className= "landing-mockup">
    //         <img className= "mockup" src={process.env.PUBLIC_URL + "/assets/images/mockup2.svg"} />
    //       </div>
    //     </div>
    //   </MediaQuery>

    //   <MediaQuery minWidth={768}>
    //     <div className= "landing-container-desktop">
    //       <div className= "landing-text-desktop">
    //         <img src={process.env.PUBLIC_URL + "/assets/images/white-primary-logo.svg"} />
    //         <h1 style={{color: 'white', margin: 0}}>A social network <br></br>to just talk TV.</h1>
    //         <p className= "landing-description">Discuss all the shows you love, <br></br> with people who do too.</p>
    //         <button className="launch-button">Launching October 24th</button>
    //       </div>
    //       <div className= "landing-mockup">
    //         <img className= "mockup" src={process.env.PUBLIC_URL + "/assets/images/mockup2.svg"} />
    //       </div>
    //     </div>
    //   </MediaQuery>  
    //  </div>
  );
}

export default Landing;