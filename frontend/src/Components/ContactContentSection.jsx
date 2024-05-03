import React from "react";
import Cat from "../assets/contact.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineAddChart } from "react-icons/md";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleCheck,
//   faCalendarCheck,
// } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styles/ContactContentSection.css";

function ContactContentSection() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointmentform");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Cat} alt="Doctor Group" className="hidden md:block ba-image1 rounded-xl  " />
      </div>

      <div className="ba-text-content">
        <h3 className=" font-poppins  ba-title md:text-5xl text-3xl ">
          <span>Why Choose Purrfect</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose National Charitable Pathology Lab for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </p>
        <div className="ba-checks ba-check-first flex gap-3 items-center text-blue-400">

          <p>
            <FaCircleCheck />

          </p>
          <div> Best Community</div>
        </div>
        <div className="ba-checks ba-check-first flex gap-3 items-center text-blue-400">

          <p>
            <FaCircleCheck />

          </p>
          <div>Transprency</div>
        </div>
        <div className="ba-checks ba-check-first flex gap-3 items-center text-blue-400">

          <p>
            <FaCircleCheck />

          </p>
          <div>  24/7 Support </div>
        </div>
        <div className="ba-checks ba-check-first flex gap-3 items-center text-blue-400">

          <p>
            <FaCircleCheck />

          </p>
          <div>   Enrollment Easy and Quick</div>
        </div>

      </div>
    </div>
  );
}

export default ContactContentSection;
