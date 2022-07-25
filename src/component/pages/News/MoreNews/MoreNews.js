import "./MoreNews.css";
import heart from "../../../../images/heart.jpg";
import ListItem from "../../../common/HidocList/ListItem";
import { HidocList } from "../../../data/Data";
import SocialNetwork from "../SocialNewtwork/SocialNetwork";
const MoreNews = () => {
  return (
    <div className="row">
      <div className="text-center p-3 m-4">
        <b>
          {" "}
          <h3>What's more on Hidoc Dr.</h3>{" "}
        </b>
      </div>
      <div className="row ">
        <div className="col-4 bg-light p-2">
          <h2>News</h2>
          <p>
            Lorem ipsum is a name for a common type of placeholder text. Also
            known as filler or dummy text, this is simply text copy that serves
            to fill a space without actually saying anything meaningful
          </p>
        </div>
        <div className="col-4 p-0">
          <img src={heart} alt="heart"></img>
        </div>

        <div className="col-4 border p-2">
          {HidocList.map((item) => (
            <ListItem item={item} key={item.id}></ListItem>
          ))}
        </div>
      </div>
      <SocialNetwork></SocialNetwork>
    </div>
  );
};

export default MoreNews;
