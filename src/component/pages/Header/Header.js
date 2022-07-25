import React from "react";
import NavBar from "../../common/NavBar";
import squareLogo from "../../../images/hidoc.png";
import { menuList } from "../../data/Data";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="row align-content-centre">
        <div className="col-2 align-content-centre">
          <img className="logo-img" src={squareLogo} alt="logo"></img>
        </div>
        <div className="col-8 ">
          <NavBar menuList={menuList}></NavBar>
        </div>
        <div className="col-2">
          <div className="avatar-content">
            <div className="rounded-sqr">
              <i className="fa-solid fa-trophy"></i>
              <div className="trophy-color">236</div>
            </div>
            <div className="rounded-cir">M</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
