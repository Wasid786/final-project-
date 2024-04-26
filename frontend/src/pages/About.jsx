import React from "react";
import Dog from "../assets/dog01.jpg";
import "../styles/About.css";
import AboutInfoCard from "../Components/AboutInfoCard";
import AboutSolutionStep from "../Components/AboutSolutionStep";

function About() {
  return (
    <div>
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img
            src={Dog}
            alt="Doctor Group"
            className="about-image1 hidden md:block rounded-xl"
          />
        </div>

        <div className="about-text-content md:text-xl">
          <h3 className="about-title">
            <span>About Us</span>
          </h3>
          <p className="about-description md:text-xl">
            Welcome to Purrfect Pet Marketplace, where pet lovers unite! Our
            platform mirrors the simplicity and transparency of OLX, connecting
            buyers and sellers directly, sans fees or middlemen. Whether you
            seek a faithful canine companion or a mischievous feline friend, our
            user-friendly features streamline the process, ensuring a seamless
            adoption journey.
          </p>

          <h4 className="about-text-title">Your Solutions</h4>

          <AboutSolutionStep
            title="Pet Adoption Verification"
            description=" Sellers can provide documentation proving the pet's health status, vaccination records,
             and origin, fostering trust and transparency among buyers."
          />

          <AboutSolutionStep
            title="Pet Care Resources:"
            description="Assist both new and experienced pet owners
             in providing optimal care for their furry companions."
          />

          <AboutSolutionStep
            title="Community Forums:"
            description="Create online forums where pet enthusiasts can connect, share experiences, and seek advice on various pet-related topics."
          />
        </div>
      </div>
      <AboutInfoCard />
    </div>
  );
}

export default About;
