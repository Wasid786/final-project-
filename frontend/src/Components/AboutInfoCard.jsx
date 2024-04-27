import React from "react";
import { FaTruckMedical } from "react-icons/fa6";
import "../styles/AboutInfoCard.css";
import InformationCard from "./InformationCard";
import Convenience from "../assets/about01.png";
import Variety from "../assets/about02.png";
import Accessibility from "../assets/about03.png";

function AboutInfoCard() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description text-xl">
        
Discover our online pet marketplace, echoing Purrfect's model, connecting buyers and sellers directly without fees or brokers. Find your perfect pet hassle-free, whether it's a loyal dog or a playful cat. With user-friendly features,
 our platform simplifies the process, making it easy to welcome a new furry friend into your home.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Convenience"
          description="Purrfect offers a seamless platform for buying and selling goods, allowing users to browse listings, communicate with sellers, and make transactions from the 
          comfort of their homes, eliminating the need for physical visits to stores or markets."
          image={Convenience}

        />

        <InformationCard
          title="Variety"
          description="With a vast array of categories and listings, Purrfect provides users with unparalleled choice, enabling them to find everything from electronics and vehicles to clothing and furniture, catering to 
          diverse needs and preferences with options ranging from brand new items to second-hand bargains."
          image={Variety}
        />

        <InformationCard
          title="Accessibility"
          description="Purrfect's user-friendly interface and mobile app ensure accessibility for all, empowering users to buy and sell anytime, anywhere, with just a few taps on their smartphones or clicks on their computers,
           democratizing commerce and enabling participation from a wide range of demographics and locations"

          image={Accessibility}

        />


      </div>
    </div>
  );
}

export default AboutInfoCard;
