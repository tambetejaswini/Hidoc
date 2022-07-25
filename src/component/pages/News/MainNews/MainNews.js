import React from "react";
import "./MainNews.css";

function MainNews({ newsList = [] }) {
  return (
    <div>
      {newsList.map((news) => (
        <div key={news.id} className="row p-2 m-0 border-bottom border-2">
          <div className="col-4 p-4">
            <img src={news.urlToImage} alt="machine" className="img"></img>
          </div>
          <div className="col-8 p-4">
            <div key={news.id}>
              <h5>{news.title}</h5>
              <p>{news.description}</p>
            </div>
            <a href="#">Read more...</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainNews;
