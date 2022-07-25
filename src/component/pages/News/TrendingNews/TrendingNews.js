import React from "react";
import newsImg from "../../../../images/glucometer.jpg";
import "./TrendingNews.css";

function TrendingNews({ newsList = [], title }) {
  return (
    <div className="m-1">
      <h5 className="text-center border-bottom m-2 p-2 border-2">{title}</h5>
      <div className=" m-1 p-1 box2Img">
        <img src={newsImg} alt="glucomenter"></img>
        <div className="p-1 m-1 border-bottom border-2">
          In recent days the most crucial challenge the medical world is facing
          is the antibiotic resistance property of the microorganisms
        </div>
        {newsList.map((news) => (
          <div key={news.id}>
            <div className="row m-1 p-1">
              <div className="col-4 box2Img">
                <img src={news.articleImg} alt="lung"></img>
              </div>
              <div className="col-8"> {news.articleTitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingNews;
