import React from "react";
import Pr from "../pics/community.jpeg";
const Home = () => {
  return (
    <div className="homepage">
      <div className="find-your">
        <h1 className="home-title">
          Find Your Perfect Sustainability Project Team
        </h1>
        <h3 className="home-explain">
          Connect with Cornell project teams and clubs that align with your
          sustainability interests, skills, and passions.
        </h3>
        <button className="survey-nav-button">Take the Matching Survey!</button>
      </div>

      <div className="why-use">
        <h1 className="why-title">Why Use Cornell Sustainability Match?</h1>

        <div className="why-circles-container">
          <div className="why-circle">
            <img src={Pr} alt="pr" className="circular-img"></img>
            <h3 className="why-circle-title">Personalized Recommendations</h3>
            <h6 className="why-circle-explain">
              Our algorithm matches you with project teams and clubs based on
              your unique interests, skills, and goals.{" "}
            </h6>
          </div>

          <div className="why-circle">
            <img src={Pr} alt="pr" className="circular-img"></img>
            <h3 className="why-circle-title">Discover New Opportunities</h3>
            <h6 className="why-circle-explain">
              Explore sustainability initiatives across campus you might never
              have found on your own.{" "}
            </h6>
          </div>

          <div className="why-circle">
            <img src={Pr} alt="pr" className="circular-img"></img>
            <h3 className="why-circle-title">Find Your Community</h3>
            <h6 className="why-circle-explain">
              Connect with like-minded peers passionate about making a
              difference in sustainability.{" "}
            </h6>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <div className="how-it-works-container">
          <h1>How It Works</h1>
          <div className="how-container-1">
            <div className="how">
              <div className="how-bullet">1</div>
              <p>
                Answer questions about your interests, skills, and goals in
                sustainability.
              </p>
            </div>
            <div className="how">
              <div className="how-bullet">2</div>
              <p>
                Our algorithm analyzes your responses to find your best-fit
                project teams and clubs.
              </p>
            </div>
          </div>
          <div className="how">
            <div className="how-bullet">3</div>
            <p>
              Reach out to your matches and start making an impact on campus
              sustainability!
            </p>
          </div>
        </div>
      </div>

      <div className="ready">
        <h1 className="home-title">Ready to find your match?</h1>
        <h3 className="home-explain">
          Take the survey now and discover project teams that align with your
          passions!
        </h3>
        <button className="survey-nav-button2">
          Take the Matching Survey!
        </button>
      </div>
    </div>
  );
};

export default Home;
