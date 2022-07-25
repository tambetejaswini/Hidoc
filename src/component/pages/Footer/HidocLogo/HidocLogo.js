import React from "react";
import squareLogo from "../../../../images/hidoc.png";
import Icon from "../../../common/Icon/Icon";
import { iconClass } from "../../../data/Data";
import "./HidocLogo.css";
function HidocLogo() {
  return (
    <div className="">
      <div className="p-1 m-1">
        <img className="logo-img" src={squareLogo} alt="logo"></img>
      </div>
      <div className="p-1 m-1">
        Fastest Growing Medical platform for Doctors
      </div>
      <div className="d-flex ">
        {iconClass.map((icon) => (
          <Icon icon={icon}></Icon>
        ))}
      </div>
    </div>
  );
}

export default HidocLogo;
