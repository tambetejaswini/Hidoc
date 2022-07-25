import React from "react";
import "./FeatureIconBox.css";
function FeatureIconBox({ iconDetails }) {
  return (
    <div
      className="icon-box"
      style={{ backgroundColor: iconDetails.cardBackground }}
    >
      <div
        className="round-cir icon-center "
        style={{ backgroundColor: iconDetails.iconBackground }}
      >
        <i class={iconDetails.icon}></i>
      </div>
      <div className="text-size logoTitle-center">{iconDetails.title}</div>
      <br></br>
    </div>
  );
}

export default FeatureIconBox;
