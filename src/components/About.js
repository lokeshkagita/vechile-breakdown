import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id ="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Get in touch with experts and schedule the service at your location.

        </h1>
        <p className="primary-text">
        The About page is where site users go to learn more about the site they’re on. If you want to convert 
visitors to users, capture opportunities to work with people, and give your regular users a deeper 
appreciation of what your site does
        </p>
        <p className="primary-text">
        The About page is the section of a website where people go to find out about the website they’re on. 
Readers will visit this section for many reasons and with various questions they want answered,
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
