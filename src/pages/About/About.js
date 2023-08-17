import React from "react";
import "./About.css";

import Profile from "../../assets/personal.jpeg";
import Jump from 'react-reveal/Jump'

const About = () => {
  return (
    <>   
        <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about_img">
            <img src={Profile} alt="about img" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              As a fresh and enthusiastic newcomer to the world of software
              development, I bring a passion for learning and a drive to master
              both the front-end and back-end aspects of creating digital
              experiences. My journey begins with a foundation in HTML, CSS, and
              JavaScript for crafting user-friendly interfaces. On the back-end,
              I'm eager to explore languages like JavaScript and frameworks like
              Node.js to build the logic that powers applications. With a hunger
              for problem-solving and a commitment to continuous growth, I'm
              excited to contribute my skills to a dynamic team, embrace
              challenges, and create impactful software solutions.
            </p>
          </div>
        </div>
      </div>
      </Jump>
    </>
  );
};

export default About;
