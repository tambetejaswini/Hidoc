import React, { useState, useEffect } from "react";
import MainNews from "./MainNews";
import NewsHeadings from "../../common/Headings";
import TrendingNews from "./TrendingNews";
import MoreNews from "./MoreNews";

function News() {
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    fetch("http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sId: 5,
        uuId: 0,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="bg-light">
        <h3 className="text-center m-1 p-2">News</h3>
        <MainNews newsList={newsData.news} />
        <div className="row p-4">
          <div className="col border m-1 p-2">
            <NewsHeadings
              newsList={newsData.latestArticle}
              title="Latest News"
            />
          </div>
          <div className="col border m-1 p-2">
            <TrendingNews
              newsList={newsData.trandingArticle}
              title="Trending News"
            />
          </div>
          <div className="col border m-1 p-2">
            <NewsHeadings
              newsList={newsData.exploreArticle}
              title="Explore more in news"
            />
          </div>
        </div>
      </div>
      <MoreNews />
    </div>
  );
}

export default News;
