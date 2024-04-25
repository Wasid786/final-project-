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
                    <img src={Dog} alt="Doctor Group" className="about-image1 hidden md:block rounded-xl" />
                </div>

                <div className="about-text-content md:text-xl">
                    <h3 className="about-title">
                        <span>About Us</span>
                    </h3>
                    <p className="about-description md:text-xl">
                        Welcome to National Charitable Pathology Lab, your trusted partner for accessible and
                        personalized healthcare. Our expert faculty offer online booking
                        and specialized services, prioritizing your well-being. Join us on
                        this journey towards a healthier you.
                    </p>

                    <h4 className="about-text-title">Your Solutions</h4>

                    <AboutSolutionStep
                        title="Choose a Specialist"
                        description="Find your perfect specialist and book with ease at National Charitable Pathology Lab. Expert doctors prioritize your health, offering tailored care."
                    />

                    <AboutSolutionStep
                        title="Make a Schedule"
                        description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
                    />

                    <AboutSolutionStep
                        title="Get Your Solutions"
                        description="Our experienced technologist  and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
                    />
                </div>
            </div>
            <AboutInfoCard />
        </div>
    );
}

export default About;
