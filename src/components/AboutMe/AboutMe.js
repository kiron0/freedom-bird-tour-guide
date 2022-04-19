import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import Profile from "../../Assets/Image/kiron.png";
import PageTitle from "../Shared/PageTitle/PageTitle";

const AboutMe = () => {
  return (
    <div className="about" id="home">
      <PageTitle title="About Me"></PageTitle>
      <h2>ABOUT ME</h2>
      <hr />
      <div className="about-me">
        <img src={Profile} alt="profile" />
      </div>
      <div className="about-info">
        <div>
          <h3>Get to know me!</h3>
          <p
            className="about-details"
            style={{
              fontFamily: "'Kaushan Script', cursive",
              color: "#292929",
            }}
          >
            Hey! It's Toufiq Hasan Kiron and I'm a Frontend Web Developer
            located in Bangladesh. I've done remote projects for agencies,
            consulted for startups, and collaborated with talented people to
            create digital products for both business and consumer use. I'm a
            bit of a digital product junky. Over the years, I've used hundreds
            of web and mobile apps in different industries and verticals. Feel
            free to contact me here.
          </p>
          <Link className="about-btn" to="/about-me">
            Contact
          </Link>
        </div>
        <div class="about__content-skills">
          <h3 class="about__content-title">My Skills</h3>
          <div class="skills">
            <div class="skills__skill">HTML</div>
            <div class="skills__skill">CSS</div>
            <div class="skills__skill">Bootstrap</div>
            <div class="skills__skill">Tailwind</div>
            <div class="skills__skill">JavaScript</div>
            <div class="skills__skill">React</div>
            <div class="skills__skill">SASS</div>
            <div class="skills__skill">GIT</div>
            <div class="skills__skill">Shopify</div>
            <div class="skills__skill">Wordpress</div>
            <div class="skills__skill">Google ADS</div>
            <div class="skills__skill">Facebook Ads</div>
            <div class="skills__skill">Android</div>
            <div class="skills__skill">IOS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
