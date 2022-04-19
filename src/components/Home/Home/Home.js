import React from "react";
import "./Home.css";
import Tour from '../../../Assets/Image/tour.jpg'
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="home" id="home">
      <PageTitle title="Home"></PageTitle>
      <div className="home-info reverse">
        <h2>hi there, i'm <span className="name">toufiq hasan kiron</span></h2>
        <p>If you want to travel, you can contact with me. I'm working travel guiding and i have lot of packages specially tour guide. <br />Tour packages and travel and hotel management packages. You can find there best travel packages in reasonable price.</p>
        <p>Our happiest moments as tourist always seem to come when we stumble upon one thing while in pursuit of something else.</p><br />
        <a className="explore-btn" href="#explore">Explore more</a>
      </div>
      <div className="tour-img">
        <img src={Tour} alt="" />
      </div>
    </div>
  );
};

export default Home;
