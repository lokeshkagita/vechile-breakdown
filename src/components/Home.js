
import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import About from "./About"
import Work from "./Work"
import Testimonial from "./Testimonial"
import Contact from "./Contact"
import Footer from "./Footer"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    
    <div className="home-container" id = "home">
      <Navbar />
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            We provide road side assistance
          </h1>
          <p className="primary-text">
          Book online for roadside assistance. Mechneu provides 24*7 Car breakdown assistance on the roadside in Kochi, Kerala
          </p>
          <button className="secondary-button">
            Book Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
          
        </div>
      </div>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
    
  );
};

export default Home;
