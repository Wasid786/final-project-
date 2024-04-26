import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
{/* <div className="info-cards">
  <span className="info-card-icon">
    <FontAwesomeIcon className="info-fa-icon" icon={props.icon} /> */}

function InformationCard(props) {
  return (
    <div className="info-cards mb-8">
      <span className="info-card-icon absolute md:top-[-89px] md:left-[35%] top-[-50px] left-[34%] ">
        {/* <FontAwesomeIcon className="info-fa-icon" icon={props.icon} /> */}
        <img className="md:w-36 mx-auto info-fa-icon w-20 " src={props.image} alt="" />
      </span>
      <p className="info-card-title">{props.title}</p>
      <p className="info-card-description">{props.description}</p>
    </div>
  );
}

export default InformationCard;
