import React from "react";
import { FaTruckMedical } from "react-icons/fa6";
import "../styles/AboutInfoCard.css";
import InformationCard from "./InformationCard";
// import checkup from "../assets/checkup.png";
// import equipment from "../assets/equipment.png";
// import service from "../assets/service.png";

function AboutInfoCard() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description text-xl">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Home Collection "
          description="Smile with confidence as our Home Collection services cater to all your
             health needs. Our skilled technologist  provide a wide range of
            tests, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          // image={equipment}

        />

        <InformationCard
          title="Emergency Care "
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          // image={service}
        />

        <InformationCard
          title="Personalized CheckUp "
          description="Our team of experienced technologist  and medical experts use
            state-of-the-art technology to assess your  health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a fulfilling life."

          // image={checkup}

        />


      </div>
    </div>
  );
}

export default AboutInfoCard;
