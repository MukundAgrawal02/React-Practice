// import React from 'react'
import amazon from "../../public/images/amazon.png"
import filpkart from "../../public/images/flipkart.png"
import shoe from "../../public/images/shoe_image.png" 
const HeroSection = () => {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="pointer">Show Now</button>
          <button className="category-btn pointer">Category</button>
        </div>
        <div className="shoping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src={amazon} alt="amazon" />
            <img src={filpkart} alt="filpkart" />
          </div>
        </div>
      </div>
        <section>
        <img className="hero-img" src={shoe} alt="shoe" />
  <article>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </article>
</section>
      </div>
  );
};

export default HeroSection;
