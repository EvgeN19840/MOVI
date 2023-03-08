import React from "react";
import { NavLink } from "react-router-dom";
import { routeDeteil as routeDeteilPage } from "../../../pages/DeteilPage";
import { INews } from "../../../types/INews";
import "./styles.scss";

interface InewsItemParams {
  item: INews;
}

const NewsItem: React.FC<InewsItemParams> = ({ item }) => (
  <NavLink className="wrap-setitem" to={routeDeteilPage(item.show.id)}>
    <div className="about-movis-wrap">
      <img
        className="poster-movis"
        src={item.show.image.medium}
        alt={"poster"}
      />
    </div>
    <div className="about-movis-text">
    <div className="name-movis">{item.show.name}</div>
    <div className="filmold">{item.show.premiered} </div>
    <div className="genres-movis">{item.show.genres}</div>
    </div>
  </NavLink>
);
export default NewsItem;
