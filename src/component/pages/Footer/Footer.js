import React from "react";
import "./Footer.css";
import HidocLogo from "./HidocLogo";
import Features from "./Features";
import ReachUs from "./Reach_Us/ReachUs";
function Footer() {
  return (
    <>
      <div className="container-fluid bg-footer-color p-5 mt-4 font-clr">
        <div className="row">
          <div className="col-3">
            <HidocLogo></HidocLogo>
          </div>
          <div className="col-3">
            <ReachUs></ReachUs>
          </div>

          <div className="col-6">
            <Features></Features>
          </div>
        </div>
      </div>
      <div className="bg-lastFooter text-center p-1">
        <div>
          <i class="fa fa-copyright" aria-hidden="true"></i> Copyright 2022
          Hidoc Dr Inc
        </div>
        <div>Terms & Conditions | Privacy Policy</div>
      </div>
    </>
  );
}

export default Footer;
