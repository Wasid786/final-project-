import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

function AboutSolutionStep(props) {
  return (
    <div className="about-text-step">
      <p className="about-text-sTitle md:text-2xl">
        <span className="flex  gap-3 text-blue-500 ">
          <div className=""><FaCircleChevronDown size={25} /></div>
          {props.title}
        </span>
      </p>
      <p className="about-text-description">{props.description}</p>
    </div>
  );
}

export default AboutSolutionStep;
