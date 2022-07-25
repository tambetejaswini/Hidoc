import React from "react";
import "./Headings.css";

function Headings({ newsList = [], title }) {
  return (
    <div className="m-1">
      <h5 className="text-center border-bottom m-2 p-2 border-2">{title}</h5>
      {newsList.map((news) => (
        <div key={news.id} className="m-2 p-2 border-bottom border-2">
          {news.articleTitle}
        </div>
      ))}
    </div>
  );
}

export default Headings;
