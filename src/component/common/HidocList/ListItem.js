import React from "react";
import "./ListItem.css";
function ListItem({ item }) {
  return (
    <div
      key={item.id}
      className="d-flex align-items-center border-bottom border-2 p-2 m-2 "
    >
      <div className="m-1 p-1">{item.icon}</div>
      <div className="p-1">
        <p>
          <b>{item.title} : </b> {item.info}
        </p>
      </div>
    </div>
  );
}

export default ListItem;
