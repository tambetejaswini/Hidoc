import React from "react";
import "./Icon.css";

function Icon({ icon }) {
  return (
    <div className="m-1">
      <div className="round-cir">
        <i className={icon.class}></i>
      </div>
    </div>
  );
}

export default Icon;
