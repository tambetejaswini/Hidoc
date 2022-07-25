import React from "react";
import "./NavBar.css";

function NavBar({ menuList }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {menuList.map((item, index) => (
          <li className="menu-item" key={item.id}>
            {item.title}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default NavBar;
